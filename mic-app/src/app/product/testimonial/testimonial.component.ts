import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  author_list = {
    "health": [
      { "quote": "The information on health insurance is pretty exhaustive. More easily understood than even the insurance company's website.", "name": "- Prakash Sinha, Ujjain"},
      { "quote": "I was looking for mediclaim policies which cover maternity expenses also. I found what I found on your site easily. Good stuff.", "name": "- Akruti Pal, Allahabad"},
      { "quote": "Thanks for all the help provided by you in selecting the right health insurance plan. Your staff was also very helpful.", "name": "- T K Gopalakrishnan, Pondicherry"},
      { "quote": "This is pretty cool. Good information provided in a simple way. Easy to understand and buy online. Will share with friends.", "name": "- Kanika Srivastava, Jabalpur"},
    ],
  };

  authors = this.author_list['health'];

  testimonialSwiper: SwiperOptions = {
      simulateTouch: false,
      spaceBetween: 30,
      autoplay: 5000,
      loop: true,
  };
  constructor() { }

  ngOnInit() {
  }

}
