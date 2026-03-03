import { app } from "./app";
import { env } from "./config/env";
import { prisma } from "./config/prisma";
import { ensureUploadDir } from "./config/storage";

async function main() {
  await prisma.$connect();
  ensureUploadDir();

  const port = Number(process.env.PORT || env.PORT || 4000);

  app.listen(port, "0.0.0.0", () => {
    console.log(`API running on port ${port}`);
  });
}

main().catch((err) => {
  console.error("Failed to start server", err);
  process.exit(1);
});