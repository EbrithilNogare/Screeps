import { RoleEnum } from './../Roles/enum';
import CreepMemory from './../Types/CreepMemory';

export function spawnCreeps(spawn: StructureSpawn) {
    // Check the number of creeps of each role
    const creepCounts: { [role: string]: number } = {
        [RoleEnum.HARVESTER]: 0,
        [RoleEnum.BUILDER]: 0,
        [RoleEnum.UPGRADER]: 0,
    };

    // Count the number of creeps of each role in the colony
    for (const creepName in Game.creeps) {
        const creep = Game.creeps[creepName];

        creepCounts[(<CreepMemory>creep.memory).role]++;
    }

    // Define the desired number of creeps for each role
    const desiredCounts: { [role: string]: number } = {
        [RoleEnum.HARVESTER]: 1,
        [RoleEnum.BUILDER]: 1,
        [RoleEnum.UPGRADER]: 1,
    };

    // Spawn creeps based on the desired counts
    for (const role in desiredCounts) {
        const desiredCount = desiredCounts[role];
        const currentCount = creepCounts[role];

        if (currentCount < desiredCount) {
            // Spawn a new creep with the desired role
            const result = spawn.spawnCreep([WORK, CARRY, MOVE], `${role}-${Game.time}`, {
                memory: { role },
            });

            if (result === OK) {
                console.log(`Spawned new creep with role ${role}`);
            }
        }
    }
}
