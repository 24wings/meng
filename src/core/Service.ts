class IService {

}

function Service() {
    return (target: new () => IService) => {
        Reflect.defineMetadata('ServiceOptions', '', target);
    }
}

interface ServiceOptions {
    path: String;
}
export { IService, Service, ServiceOptions }