import {HeroesComponent} from './heroes.component';
import {of} from 'rxjs/internal/observable/of';

describe('HeroesComponent', () => {
    let component: HeroesComponent;
    let HEROES;
    let mockHeroService;

    beforeEach(() => {
        HEROES = [
            {id: 1, name: 'SpiderDude', strength: 8},
            {id: 2, name: 'Wondreful Women', strength: 20},
            {id: 3, name: 'SuperDude', strength: 54},
        ];
    });

    mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);

    component = new HeroesComponent(mockHeroService);

    describe('delete', () => {
        it('should remove the indicated hero from heroes list', () => {
            mockHeroService.deleteHero.and.returnValue(of(true)); // bo subscribe() -> this.heroService.deleteHero(hero).subscribe();
            component.heroes = HEROES;

            component.delete(HEROES[2]);

            expect(component.heroes.length).toBe(2);
        });

        it('should call deleteHero', () => {
            mockHeroService.deleteHero.and.returnValue(of(true)); // bo subscribe() -> this.heroService.deleteHero(hero).subscribe();
            component.heroes = HEROES;

            component.delete(HEROES[2]);

            // expect(mockHeroService.deleteHero).toHaveBeenCalled(); //jesli nie ma parametru
            expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[2]);
        });
    });

});
