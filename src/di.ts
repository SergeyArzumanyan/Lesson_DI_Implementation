/** Some service in the application */
class SomeService {
    saySomething(): void {
        console.log('Something !');
    }
}


/** Angular's DI in a nutshell */
class Injector {
    private _container: Map<string, any> = new Map<string, any>();

    constructor(private _providers: any[] = []) {
        this._providers
            .forEach(service => this._container.set(service, new service()));
    }

    getInstance(service: any) {
        const serviceInstance = this._container.get(service);

        if (!serviceInstance) {
            throw new Error(`No providers found for ${ service }`);
        }

        return serviceInstance;
    }
}


/** Somewhere in the application

 const injector: Injector = new Injector([SomeService]);
 const component = new Component(injector.getInstance(SomeService));
 component.saySomething();

 */
