import { TestBed} from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import {OrderService} from './order.service';

describe('Testing Order Service', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientModule],
        providers: [OrderService]
    }));

    it('Should Return true', () => {
        const service: OrderService = TestBed.get(OrderService);
        expect(service).toBeTruthy();
    });

    it('Should gett call true', () => {
        const service: OrderService = TestBed.get(OrderService);
        service.getHotelDetails(6360).subscribe((data) => {
            expect(data.length).toBeGreaterThan(0);
        });
    });
});



