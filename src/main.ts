import * as Mayor from './Mayor/index';
import { spawnCreeps } from './Utils/spawnCreeps';
import tickCreeps from './Utils/tickCreeps';

console.log('tick initialized');
Mayor.run();

const spawn = Game.spawns['Spawn1'];

spawnCreeps(spawn);
tickCreeps();
