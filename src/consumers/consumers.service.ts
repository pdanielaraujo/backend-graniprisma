import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { CreateConsumerDto } from "./dto/create-consumer.dto";
import { UpdateConsumerDto } from "./dto/update-consumer.dto";

@Injectable()
export class ConsumersService {
  constructor(private prisma: PrismaService) {}

  async create(createConsumerDto: CreateConsumerDto) {
    await this.prisma.customer.create({ data: createConsumerDto });
    return "This action adds a new consumer";
  }

  async findAll() {
    // const { skip, take, cursor, where, orderBy } = params;
    console.log(`This action returns all consumers`);
    return await this.prisma.customer.findMany();
  }

  async findOne(id: string) {
    console.log(`This action returns a #${id} consumer`);
    return await this.prisma.customer.findUnique({ where: { id } });
  }

  async update(id: string, updateConsumerDto: UpdateConsumerDto) {
    console.log(`This action updates a #${id} consumer`);
    return await this.prisma.customer.update({
      where: { id },
      data: updateConsumerDto,
    });
  }

  async remove(id: string) {
    console.log(`This action removes a #${id} consumer`);
    return await this.prisma.customer.delete({ where: { id } });
  }
}
