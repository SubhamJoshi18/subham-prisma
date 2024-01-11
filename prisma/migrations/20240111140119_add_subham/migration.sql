-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subham" (
    "id" SERIAL NOT NULL,
    "hobbies" TEXT NOT NULL,
    "coding_language" TEXT,
    "fav_food" TEXT,

    CONSTRAINT "subham_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "subham_hobbies_key" ON "subham"("hobbies");
