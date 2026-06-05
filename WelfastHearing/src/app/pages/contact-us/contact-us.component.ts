import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css',
})
export class ContactUsComponent {
  schemaOrgJson = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalClinic',
        '@id': 'https://welfasthearing.com.au/#localbusiness',
        name: 'Welfast Hearing',
        url: 'https://welfasthearing.com.au/',
        logo: 'https://welfasthearing.com.au/assets/Welfast%20Hearing%20Branding%20Kit-08.png',
        image:
          'https://welfasthearing.com.au/assets/Welfast%20Hearing%20Branding%20Kit-08.png',
        telephone: '+61 2 4311 5511',
        email: 'admin@welfasthearing.com.au',
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Shop 020/12 Bay Village Rd',
          addressLocality: 'Bateau Bay',
          addressRegion: 'NSW',
          postalCode: '2261',
          addressCountry: 'AU',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 'REPLACE_WITH_LAT',
          longitude: 'REPLACE_WITH_LNG',
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '17:00',
          },
        ],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            telephone: '+61 2 4311 5511',
            email: 'admin@welfasthearing.com.au',
            areaServed: 'AU',
            availableLanguage: ['English'],
          },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': 'https://welfasthearing.com.au/Contact-us/#webpage',
        url: 'https://welfasthearing.com.au/Contact-us',
        name: 'Contact Welfast Hearing – Book Hearing Test & Consultation',
        description:
          'Contact Welfast Hearing for professional hearing tests, hearing aids, and ear care services in Central Coast and Lake Macquarie.',
        isPartOf: {
          '@id': 'https://welfasthearing.com.au/#website',
        },
        about: {
          '@id': 'https://welfasthearing.com.au/#localbusiness',
        },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: 'https://welfasthearing.com.au/assets/Welfast%20Hearing%20Branding%20Kit-08.png',
        },
        inLanguage: 'en-AU',
      },
      {
        '@type': 'ContactPage',
        '@id': 'https://welfasthearing.com.au/Contact-us/#contactpage',
        name: 'Contact Welfast Hearing',
        url: 'https://welfasthearing.com.au/Contact-us',
        isPartOf: {
          '@id': 'https://welfasthearing.com.au/#website',
        },
        about: {
          '@id': 'https://welfasthearing.com.au/#localbusiness',
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://welfasthearing.com.au/Contact-us/#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://welfasthearing.com.au/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Contact Us',
            item: 'https://welfasthearing.com.au/Contact-us',
          },
        ],
      },
    ],
  };
  constructor(
    private meta: Meta,
    private title: Title,
    private route: ActivatedRoute,
    private servicesService: ServiceService,
    @Inject(DOCUMENT) private doc: Document,
  ) {
    // Set page title
    this.title.setTitle(
      'Contact Welfast Hearing Your Local Hearing Care Experts',
    );

    // Set meta description
    this.meta.updateTag({
      name: 'description',
      content:
        'Get in touch with Welfast Hearing for expert hearing tests, micro suction ear wax removal, and hearing aid consultations. Serving Central Coast & Lake Macquarie with audiologist-owned care.',
    });

    // Set keywords
    this.meta.updateTag({
      name: 'keywords',
      content:
        'Contact Audiologist in Central Coast, Book Hearing Test in Central Coast, Hearing Clinic Central Coast, Contact Hearing Specialist in Central Coast',
    });

    // Set Open Graph tags
    this.meta.updateTag({
      property: 'og:title',
      content: 'Contact Welfast Hearing Your Local Hearing Care Experts',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Get in touch with Welfast Hearing for expert hearing care in Central Coast & Lake Macquarie.',
    });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://welfasthearing.com.au/assets/images/contact-banner.jpg',
    });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://welfasthearing.com.au/Contact-us',
    });

    // Set canonical URL
    this.setCanonicalUrl('https://welfasthearing.com.au/Contact-us');
  }
  ngOnInit() {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        setTimeout(() => {
          const el = document.getElementById(fragment);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    });
    this.servicesService.setSchema(this.schemaOrgJson);
  }
  ngOnDestroy() {
    this.servicesService.removeSchema();
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
}
