import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DataSource, EntityManager } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  constructor(
    private readonly dataSource: DataSource
  ) {
    console.log("Data source is : ", dataSource.isInitialized)
  }

  getManager(): EntityManager {
    return this.dataSource.manager;
  }

  async create(createUserDto: CreateUserDto) {
    let user: User = this.getManager().create(User);
    user.firstname = "Manasvi";
    user.lastname = "Patel";
    user.email = "pat.manasvi@gmail.com"
    user.short = "MP";
    user.password = "ssdf";

    user = await this.dataSource.manager.save(user);
    return user;
  }

  async findAll() {
    return await this.getManager().find(User);
  }

  async findOne(id: string) {

    let user: User = await this.getManager().findOneBy(User, { id: id });
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {

    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
