-- CreateTable
CREATE TABLE "customers" (
    "_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,
    "age" INTEGER NOT NULL,
    "ender" TEXT NOT NULL,
    "num" INTEGER NOT NULL,
    "cid" TEXT NOT NULL,
    "est" TEXT NOT NULL,
    "cel" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("_id")
);
