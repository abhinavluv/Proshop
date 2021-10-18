import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Luv Sharma',
        email: 'luv@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Abhinav Sharma',
        email: 'abhinav@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Utsav Sharma',
        email: 'utsav@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Anita Sharma',
        email: 'anita@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Uday Kumar Sharma',
        email: 'uday@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
];

export default users;
