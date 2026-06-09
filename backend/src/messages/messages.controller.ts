import { Body, Controller, Post } from "@nestjs/common";
import { CreateMessageDto } from "./dto/create-message.dto";
import { MessagesService } from "./messages.service";

@Controller("messages")
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Post()
  async create(@Body() payload: CreateMessageDto) {
    const result = await this.messagesService.create(payload);

    return {
      ok: true,
      message: "Message received successfully.",
      submission: result,
    };
  }
}
