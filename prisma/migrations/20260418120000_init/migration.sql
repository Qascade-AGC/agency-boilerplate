-- CreateTable
CREATE TABLE "BoilerplateMeta" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BoilerplateMeta_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BoilerplateMeta_key_key" ON "BoilerplateMeta"("key");
