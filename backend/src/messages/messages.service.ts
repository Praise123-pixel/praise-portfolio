import { Injectable } from "@nestjs/common";
import { randomUUID } from "crypto";
import { mkdir, readFile, writeFile } from "fs/promises";
import { join } from "path";
import { CreateMessageDto } from "./dto/create-message.dto";

type StoredMessage = CreateMessageDto & {
  id: string;
  createdAt: string;
};

@Injectable()
export class MessagesService {
  private readonly dataDirectory = join(process.cwd(), "data");
  private readonly filePath = join(this.dataDirectory, "messages.json");

  async create(payload: CreateMessageDto) {
    await mkdir(this.dataDirectory, { recursive: true });

    const messages = await this.readMessages();
    const nextMessage: StoredMessage = {
      id: randomUUID(),
      createdAt: new Date().toISOString(),
      ...payload,
    };

    messages.push(nextMessage);
    await writeFile(this.filePath, JSON.stringify(messages, null, 2), "utf8");

    return nextMessage;
  }

  private async readMessages() {
    try {
      const file = await readFile(this.filePath, "utf8");
      return JSON.parse(file) as StoredMessage[];
    } catch {
      return [];
    }
  }
}
