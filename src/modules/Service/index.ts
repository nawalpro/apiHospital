import {getCustomRepository} from "typeorm";
import ServiceRepository from './ServiceRepository';
import ServiceService from './ServiceService';
import ServiceController from './ServiceController';
import ServiceRouter from './ServiceRouter';
import {jwtService, mailerService} from '../../libs';

const serviceRepository = getCustomRepository(ServiceRepository);
const serviceService = new ServiceService(serviceRepository, mailerService);
const serviceController = new ServiceController(ServiceService, jwtService);
const serviceRouter = ServiceRouter(serviceController);

export {serviceController};