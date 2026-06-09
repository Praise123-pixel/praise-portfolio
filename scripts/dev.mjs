import { spawn } from "node:child_process";

const children = [];

const run = (name, args) => {
  const child =
    process.platform === "win32"
      ? spawn("cmd.exe", ["/d", "/s", "/c", `npm.cmd ${args.join(" ")}`], {
          cwd: process.cwd(),
          stdio: "inherit",
          shell: false,
        })
      : spawn("npm", args, {
          cwd: process.cwd(),
          stdio: "inherit",
          shell: false,
        });

  child.on("exit", (code) => {
    if (code && code !== 0) {
      console.error(`${name} exited with code ${code}.`);
      shutdown(code);
    }
  });

  children.push(child);
};

const shutdown = (code = 0) => {
  for (const child of children) {
    if (!child.killed) {
      child.kill();
    }
  }
  process.exit(code);
};

process.on("SIGINT", () => shutdown(0));
process.on("SIGTERM", () => shutdown(0));

run("frontend", ["run", "dev:frontend"]);
run("backend", ["run", "dev:backend"]);
