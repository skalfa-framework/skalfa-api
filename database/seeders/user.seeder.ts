import { Role, User } from "@models";
import "@controllers";

export default async function UserSeeder() {
    // =========================>
    // ## Seed the application's database
    // =========================>
    await (new Role).pump([
        {"name": "Admin", "permissions": JSON.stringify([])},
        {"name": "Petugas", "permissions": JSON.stringify([])}
    ]);

    await (new User).pump([
        {"name": "Admin", "username": "admin", "password": "$2b$10$tPX5QhnM.vUEDmDpht6O4OarVyTh43NTxhkzFrNxfRijJ3uhSHcli", "role_id": 1},
        {"name": "Petugas", "username": "petugas", "password": "$2b$10$tPX5QhnM.vUEDmDpht6O4OarVyTh43NTxhkzFrNxfRijJ3uhSHcli", "role_id": 2}
    ]);
}
