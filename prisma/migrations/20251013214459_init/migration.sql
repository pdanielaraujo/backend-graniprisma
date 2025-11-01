-- CreateTable
CREATE TABLE "user" (
    "id" UUID NOT NULL,
    "name" VARCHAR NOT NULL,
    "email" VARCHAR(128) NOT NULL,
    "phone_number" VARCHAR(64) NOT NULL,
    "phone_number_country_code" VARCHAR(10) NOT NULL,
    "tax_number" VARCHAR(32),

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customer" (
    "id" UUID NOT NULL,
    "first_name" VARCHAR(32) NOT NULL,
    "last_name" VARCHAR(32) NOT NULL,
    "email" VARCHAR(128),
    "phone_number" VARCHAR(64) NOT NULL,
    "phone_number_country_code" VARCHAR(10) NOT NULL,
    "address" VARCHAR NOT NULL,
    "zip_code" VARCHAR(32) NOT NULL,
    "tax_number" VARCHAR(32) NOT NULL,

    CONSTRAINT "customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "supplier" (
    "id" UUID NOT NULL,
    "name" VARCHAR(32) NOT NULL,
    "email" VARCHAR(128),
    "phone_number" VARCHAR(64) NOT NULL,
    "phone_number_country_code" VARCHAR(10) NOT NULL,
    "tax_number" VARCHAR(32) NOT NULL,

    CONSTRAINT "supplier_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_tax_number_key" ON "user"("tax_number");

-- CreateIndex
CREATE UNIQUE INDEX "user_phone_number_country_code_phone_number_key" ON "user"("phone_number_country_code", "phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "customer_email_key" ON "customer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "customer_tax_number_key" ON "customer"("tax_number");

-- CreateIndex
CREATE UNIQUE INDEX "customer_phone_number_country_code_phone_number_key" ON "customer"("phone_number_country_code", "phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "supplier_email_key" ON "supplier"("email");

-- CreateIndex
CREATE UNIQUE INDEX "supplier_tax_number_key" ON "supplier"("tax_number");

-- CreateIndex
CREATE UNIQUE INDEX "supplier_phone_number_country_code_phone_number_key" ON "supplier"("phone_number_country_code", "phone_number");
