import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
  Inject,
} from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('whyChooseSection', { static: false }) sectionRef!: ElementRef;
  isSectionVisible = false;
  schemaOrgJson = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalBusiness',
        '@id': 'https://welfasthearing.com.au/#localbusiness',
        name: 'Welfast Hearing',
        url: 'https://welfasthearing.com.au/',
        logo: 'https://welfasthearing.com.au/assets/Welfast%20Hearing%20Branding%20Kit-08.png',
        image:
          'https://welfasthearing.com.au/assets/Welfast%20Hearing%20Branding%20Kit-08.png',
        description:
          'Welfast Hearing provides professional hearing care, hearing tests, hearing aids, micro suction ear wax removal and hearing wellness support across Central Coast and Lake Macquarie.',
        telephone: '+61 2 4311 5511',
        email: 'admin@welfasthearing.com.au',
        priceRange: '$$',
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '17:00',
          },
        ],
        areaServed: [
          {
            '@type': 'Place',
            name: 'Central Coast',
          },
          {
            '@type': 'Place',
            name: 'Lake Macquarie',
          },
          {
            '@type': 'Place',
            name: 'Morisset',
          },
          {
            '@type': 'Place',
            name: 'Bateau Bay',
          },
          {
            '@type': 'Place',
            name: 'Central Mangrove',
          },
          {
            '@type': 'Place',
            name: 'Woongarrah',
          },
        ],
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Shop 020/12 Bay Village Rd',
          addressLocality: 'Bateau Bay',
          addressRegion: 'NSW',
          postalCode: '2261',
          addressCountry: 'AU',
        },
        knowsAbout: [
          'Hearing Tests',
          'Hearing Aids',
          'Bluetooth Hearing Aids',
          'Micro Suction Ear Wax Removal',
          'Hearing Wellness',
          'Audiology Services',
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Welfast Hearing Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Hearing Tests',
                description:
                  'Professional hearing tests to assess hearing health and support personalised hearing care.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Hearing Aids',
                description:
                  'Hearing aid solutions including modern Bluetooth hearing aids for improved hearing support.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Micro Suction Ear Wax Removal',
                description:
                  'Safe and professional micro suction ear wax removal service.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Personalised Hearing Care',
                description:
                  "Individual hearing care support designed around each person's hearing needs.",
              },
            },
          ],
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+61 2 4311 5511',
          contactType: 'customer service',
          email: 'admin@welfasthearing.com.au',
          areaServed: 'AU',
          availableLanguage: 'English',
        },
      },
      {
        '@type': 'Organization',
        '@id': 'https://welfasthearing.com.au/#organization',
        name: 'Welfast Hearing',
        url: 'https://welfasthearing.com.au/',
        logo: 'https://welfasthearing.com.au/assets/Welfast%20Hearing%20Branding%20Kit-08.png',
        image:
          'https://welfasthearing.com.au/assets/Welfast%20Hearing%20Branding%20Kit-08.png',
        email: 'admin@welfasthearing.com.au',
        telephone: '+61 2 4311 5511',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Shop 020/12 Bay Village Rd',
          addressLocality: 'Bateau Bay',
          addressRegion: 'NSW',
          postalCode: '2261',
          addressCountry: 'AU',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://welfasthearing.com.au/#website',
        url: 'https://welfasthearing.com.au/',
        name: 'Welfast Hearing',
        publisher: {
          '@id': 'https://welfasthearing.com.au/#organization',
        },
        inLanguage: 'en-AU',
      },
      {
        '@type': 'WebPage',
        '@id': 'https://welfasthearing.com.au/#webpage',
        url: 'https://welfasthearing.com.au/',
        name: 'Expert Hearing Tests & Hearing Aids in Central Coast | Welfast Hearing',
        description:
          'Welfast Hearing provides hearing tests, hearing aids, micro suction ear wax removal and hearing wellness services across Central Coast and Lake Macquarie.',
        isPartOf: {
          '@id': 'https://welfasthearing.com.au/#website',
        },
        about: {
          '@id': 'https://welfasthearing.com.au/#localbusiness',
        },
        breadcrumb: {
          '@id': 'https://welfasthearing.com.au/#breadcrumb',
        },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: 'https://welfasthearing.com.au/assets/Welfast%20Hearing%20Branding%20Kit-08.png',
        },
        inLanguage: 'en-AU',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://welfasthearing.com.au/#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://welfasthearing.com.au/',
          },
        ],
      },
    ],
  };

  constructor(
    private router: Router,
    private meta: Meta,
    private title: Title,
    private servicesService: ServiceService,
    @Inject(DOCUMENT) private doc: Document,
  ) {
    // SEO meta settings
    this.title.setTitle(
      'Expert Hearing Tests & Hearing Aids in Central Coast | Welfast Hearing',
    );

    this.meta.addTags([
      {
        name: 'description',
        content:
          'Welfast Hearing offers professional hearing tests, micro suction ear wax removal, and the latest Bluetooth and rechargeable hearing aids. Audiologist-owned care in Central Coast and Lake Macquarie.',
      },
      {
        name: 'keywords',
        content:
          'Hearing Tests Central Coast, Rechargeable Hearing Aids, Hearing Clinic in Lake Macquarie, Micro suction Ear wax removal, Bluetooth hearing, Hearing wellness experts in Central Coast',
      },
      {
        property: 'og:title',
        content:
          'Expert Hearing Tests & Hearing Aids in Central Coast | Welfast Hearing',
      },
      {
        property: 'og:description',
        content:
          'Welfast Hearing offers professional hearing tests, micro suction ear wax removal, and the latest Bluetooth and rechargeable hearing aids.',
      },
      {
        property: 'og:image',
        content: 'https://welfasthearing.com.au/assets/Banner-images/5.png',
      },
      { property: 'og:url', content: 'https://welfasthearing.com.au/' },
    ]);

    this.setCanonicalUrl('https://welfasthearing.com.au/');
  }

  ngOnInit(): void {
    this.servicesService.setSchema(this.schemaOrgJson);
  }

  ngAfterViewInit(): void {
    // ❗ Ensure element exists before using observer
    if (!this.sectionRef) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        this.isSectionVisible = true;
        observer.disconnect();
      }
    });

    observer.observe(this.sectionRef.nativeElement);
  }

  private setCanonicalUrl(url: string) {
    const existing = this.doc.querySelector(
      "link[rel='canonical']",
    ) as HTMLLinkElement;

    if (existing) {
      existing.remove();
    }
    // Create and append
    const link = this.doc.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', url);
    this.doc.head.appendChild(link);
  }

  contactus() {
    this.router.navigate(['/contact-us']);
  }

  cards = [
    {
      id: 1,
      title: 'Personalized Care',
      alt: 'Hearing test and advanced audiology care at Welfast Hearing with personalized hearing solutions in Central Coast and Lake Macquarie',
      slug: 'personalized-care',
      image:
        '../../../assets/homewhychoosewellfast/Hearing-test-and-advanced-audiology-care-at-Welfast-Hearing-with-personalized-hearing-solutions-in-Central-Coast-and-Lake-Macquarie.webp',
      fullContent:
        'We are committed to providing personalized and state-of-the-art hearing care and the latest technology...',
      showMore: false,
    },
    {
      id: 2,
      title: 'Informed Choices',
      alt: 'Person wearing audiometric headphones during a professional hearing test at Welfast Hearing, Central Coast and Lake Macquarie.',
      slug: 'informed-choices',
      image:
        '../../../assets/homewhychoosewellfast/Person-wearing-audiometric-headphones-during-a-professional-hearing-test-at-Welfast-Hearing-Central-Coast-and-Lake-Macquarie.webp',
      fullContent:
        'In Welfast Hearing, we believe in informed choices or decisions made by you...',
      showMore: false,
    },
    {
      id: 3,
      title: 'Government Funding & Payment Plans',
      alt: 'Government funding and payment plans for hearing aids and hearing tests at Welfast Hearing.',
      slug: 'government-funding-and-payment-plans',
      image:
        '../../../assets/homewhychoosewellfast/Government-funding-and-payment-plans-for-hearing-aids-and-hearing-tests-at-Welfast-Hearing.webp',
      fullContent:
        'We assist you in availing of government funding/rebates through hearing service programs...',
      showMore: false,
    },
    {
      id: 4,
      title: 'Ongoing After Care',
      alt: 'Ongoing aftercare and audiology support at Welfast Hearing for long-term hearing health on the Central Coast and Lake Macquarie.',
      slug: 'ongoing-after-care',
      image:
        '../../../assets/homewhychoosewellfast/Ongoing-aftercare-and-audiology-support-at-Welfast-Hearing-for-long-term-hearing-health-on-the-Central-Coast-and-Lake-Macquarie.webp',
      fullContent:
        'We believe in long-standing relationships and ongoing aftercare...',
      showMore: false,
    },
    {
      id: 5,
      title: 'Hassle-Free Purchase',
      alt: 'Hassle-free hearing aid purchase at Welfast Hearing, Central Coast and Lake Macquarie.',
      slug: 'hassle-free-purchase',
      image:
        '../../../assets/homewhychoosewellfast/Hassle-free-hearing-aid-purchase-at-Welfast-Hearing-Central-Coast-and-Lake-Macquarie.webp',
      fullContent:
        'Purchasing hearing aids is a long-term investment in your hearing and overall wellness...',
      showMore: false,
    },
  ];

  showmore(card: any) {
    this.router.navigate(['/why-choose-welfast', card.slug], {
      state: { card },
    });
  }

  trackByCard(index: number, card: any): number {
    return card.id;
  }

  generateSrcSet(image: string): string {
    const base = image.replace(/\.(jpg|png|webp)$/, '');
    return `${base}.webp 150w, ${base}.webp 300w, ${base}.webp 600w`;
  }
}
