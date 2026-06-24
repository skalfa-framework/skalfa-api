import { Role, User } from "@models";
import { db } from "@utils";

export default async function UserSeeder() {
    // =========================>
    // ## Seed the application's database
    // =========================>
    await (new Role).pump([
        {"name": "Admin"},
        {"name": "Petugas"}
    ]);

    await (new User).pump([
        {"name": "Admin", "email": "admin@skalfa.id", "password": "$2b$10$tPX5QhnM.vUEDmDpht6O4OarVyTh43NTxhkzFrNxfRijJ3uhSHcli"},
        {"name": "Petugas", "email": "petugas@skalfa.id", "password": "$2b$10$tPX5QhnM.vUEDmDpht6O4OarVyTh43NTxhkzFrNxfRijJ3uhSHcli"}
    ]);

    if (db) {
        await db("user_has_user_roles").insert([
            { "user_id": 1, "user_role_id": 1 },
            { "user_id": 2, "user_role_id": 2 }
        ]);
    }
}
