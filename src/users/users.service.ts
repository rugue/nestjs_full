import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'ADMIN',
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      role: 'INTERN',
    },
    {
      id: '3',
      name: 'Michael Johnson',
      email: 'michael.johnson@example.com',
      role: 'ENGINEER',
    },
    {
      id: '4',
      name: 'Emily Davis',
      email: 'emily.davis@example.com',
      role: 'INTERN',
    },
    {
      id: '5',
      name: 'William Brown',
      email: 'william.brown@example.com',
      role: 'ADMIN',
    },
    {
      id: '6',
      name: 'Olivia Wilson',
      email: 'olivia.wilson@example.com',
      role: 'ENGINEER',
    },
    {
      id: '7',
      name: 'James Garcia',
      email: 'james.garcia@example.com',
      role: 'INTERN',
    },
    {
      id: '8',
      name: 'Ava Martinez',
      email: 'ava.martinez@example.com',
      role: 'ENGINEER',
    },
    {
      id: '9',
      name: 'Liam Anderson',
      email: 'liam.anderson@example.com',
      role: 'ADMIN',
    },
    {
      id: '10',
      name: 'Sophia Thomas',
      email: 'sophia.thomas@example.com',
      role: 'INTERN',
    },
  ];
}
