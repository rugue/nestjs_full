import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'ADMIN',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      role: 'INTERN',
    },
    {
      id: 3,
      name: 'Michael Johnson',
      email: 'michael.johnson@example.com',
      role: 'ENGINEER',
    },
    {
      id: 4,
      name: 'Emily Davis',
      email: 'emily.davis@example.com',
      role: 'INTERN',
    },
    {
      id: 5,
      name: 'William Brown',
      email: 'william.brown@example.com',
      role: 'ADMIN',
    },
    {
      id: 6,
      name: 'Olivia Wilson',
      email: 'olivia.wilson@example.com',
      role: 'ENGINEER',
    },
    {
      id: 7,
      name: 'James Garcia',
      email: 'james.garcia@example.com',
      role: 'INTERN',
    },
    {
      id: 8,
      name: 'Ava Martinez',
      email: 'ava.martinez@example.com',
      role: 'ENGINEER',
    },
    {
      id: 9,
      name: 'Liam Anderson',
      email: 'liam.anderson@example.com',
      role: 'ADMIN',
    },
    {
      id: 10,
      name: 'Sophia Thomas',
      email: 'sophia.thomas@example.com',
      role: 'INTERN',
    },
  ];

  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      const rolesArray = this.users.filter((user) => user.role === role);
      if (rolesArray.length === 0) {
        throw new NotFoundException(`User Role Not Found`);
        return rolesArray;
      }
      return this.users;
    }
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  create(createUserDto: CreateUserDto) {
    const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = {
      id: usersByHighestId[0].id + 1,
      ...createUserDto,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, updatedUserDto: UpdateUserDto) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updatedUserDto };
      }
      return user;
    });
    return this.findOne(id);
  }

  delete(id: number) {
    const removedUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return removedUser;
  }
}
