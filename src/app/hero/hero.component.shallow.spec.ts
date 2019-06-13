import {HeroComponent} from './hero.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('HeroComponent (shallow tests)', () => {
    let fixture: ComponentFixture<HeroComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({ // towrzymy pojedynczy modul do testowania tylko z potrzebnymi deklaracjami i importami
            declarations: [HeroComponent],
            schemas: [NO_ERRORS_SCHEMA] // ignorujemy np.  RouterLink nie uzywac duzo, bo nie wykryje blednow np skladniowych z html
        });
        fixture = TestBed.createComponent(HeroComponent);
    });

    it('should have the correct hero', () => {
        fixture.componentInstance.hero = {id: 1, name: 'Super', strength: 3};

        expect(fixture.componentInstance.hero.name).toEqual('Super');
    });

    it('should render the hero name in an anchor tag', () => {
        fixture.componentInstance.hero = {id: 1, name: 'Super', strength: 3};
        fixture.detectChanges();

        expect(fixture.nativeElement.querySelector('a').textContent).toContain('Super');
    });

});
