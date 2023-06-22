import { RoleEnum } from './../Roles/enum';
import { Harvester, Builder, Upgrader } from './../Roles/index';
import CreepMemory from './../Types/CreepMemory';

export default function tickCreeps() {
    for (const creepName in Game.creeps) {
        const creep = Game.creeps[creepName];

        console.log(typeof Harvester.run);

        // Check if the creep has a valid role assigned
        switch ((<CreepMemory>creep.memory).role) {
            case RoleEnum.HARVESTER:
                Harvester.run(creep);
                break;
            case RoleEnum.BUILDER:
                Builder.run(creep);
                break;
            case RoleEnum.UPGRADER:
                Upgrader.run(creep);
                break;
        }
    }
}
