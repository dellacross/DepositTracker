-- CreateTable
CREATE TABLE "deposits" (
    "id" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "depositDate" TIMESTAMP(3),
    "depositBy" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "deposits_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "trackers" (
    "id" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "trackers_pkey" PRIMARY KEY ("id")
);
