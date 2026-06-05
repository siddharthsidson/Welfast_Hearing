import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { HearingAidsComponent } from '../products/hearing-aids/hearing-aids.component';
import { HearingaidService } from '../hearingService/hearingaid.service';
import { StripHtmlPipe } from './strip-html.pipe';
import { SafeHtmlPipe } from './safe-html.pipe';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';
import { ServiceService } from '../../services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  host: { ngSkipHydration: 'true' },
  imports: [CommonModule, StripHtmlPipe, SafeHtmlPipe],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent implements OnInit, OnDestroy {
  services: any[] = [];
  loading = true;
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
      },
      {
        '@type': 'Organization',
        '@id': 'https://welfasthearing.com.au/#organization',
        name: 'Welfast Hearing',
        url: 'https://welfasthearing.com.au/',
        logo: 'https://welfasthearing.com.au/assets/Welfast%20Hearing%20Branding%20Kit-08.png',
      },
      {
        '@type': 'WebPage',
        '@id': 'https://welfasthearing.com.au/services/#webpage',
        url: 'https://welfasthearing.com.au/services/',
        name: 'Professional Hearing Services – Tests, Aids & Ear Wax Removal',
        description:
          'Explore expert hearing services including hearing tests, micro suction ear wax removal, Bluetooth hearing aids, and personalised hearing care.',
        isPartOf: {
          '@id': 'https://welfasthearing.com.au/#website',
        },
        about: {
          '@id': 'https://welfasthearing.com.au/#localbusiness',
        },
        provider: {
          '@id': 'https://welfasthearing.com.au/#localbusiness',
        },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: 'https://welfasthearing.com.au/assets/Welfast%20Hearing%20Branding%20Kit-08.png',
        },
      },
      {
        '@type': 'Service',
        '@id': 'https://welfasthearing.com.au/services/#service',
        name: 'Hearing Care Services',
        serviceType: 'Audiology Services',
        provider: {
          '@id': 'https://welfasthearing.com.au/#localbusiness',
        },
        areaServed: {
          '@type': 'AdministrativeArea',
          name: 'Central Coast & Lake Macquarie',
        },
      },
      {
        '@type': 'ItemList',
        '@id': 'https://welfasthearing.com.au/services/#service-list',
        name: 'Hearing Services List',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            url: 'https://welfasthearing.com.au/services/hearing-tests/',
            name: 'Hearing Tests',
          },
          {
            '@type': 'ListItem',
            position: 2,
            url: 'https://welfasthearing.com.au/services/ear-wax-removal/',
            name: 'Micro Suction Ear Wax Removal',
          },
          {
            '@type': 'ListItem',
            position: 3,
            url: 'https://welfasthearing.com.au/services/hearing-aids/',
            name: 'Hearing Aids',
          },
          {
            '@type': 'ListItem',
            position: 4,
            url: 'https://welfasthearing.com.au/services/personalised-hearing-care/',
            name: 'Personalised Hearing Care',
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://welfasthearing.com.au/services/#breadcrumb',
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
            name: 'Services',
            item: 'https://welfasthearing.com.au/services/',
          },
        ],
      },
    ],
  };

  constructor(
    private servicesService: ServiceService,
    private meta: Meta,
    private title: Title,
    private router: Router,
    @Inject(DOCUMENT) private doc: Document,
  ) {
    this.title.setTitle(
      'Comprehensive Hearing Services – Tests, Aids & Wax Removal',
    );

    // Set meta description
    this.meta.updateTag({
      name: 'description',
      content:
        'Explore professional hearing services at Welfast Hearing—Hearing Tests, Micro Suction Ear Wax Removal, Bluetooth Hearing Aids, and Rechargeable Hearing Aids. Expert care in Central Coast & Lake Macquarie.',
    });

    // Set keywords
    this.meta.updateTag({
      name: 'keywords',
      content:
        'Hearing Services in Central Coast, Hearing Tests Central Coast, Micro Suction Ear Wax Removal, Hearing Aids Central Coast, Rechargeable Hearing Aids, Bluetooth Hearing Aids, Audiology Services in Central Coast',
    });

    // Set Open Graph tags
    this.meta.updateTag({
      property: 'og:title',
      content: 'Comprehensive Hearing Services – Tests, Aids & Wax Removal',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Professional hearing services including tests, hearing aids, and ear wax removal in Central Coast.',
    });
    this.meta.updateTag({
      property: 'og:image',
      content:
        'https://welfasthearing.com.au/assets/hearingService/microsuction.jpeg',
    });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://welfasthearing.com.au/Services',
    });

    // Set canonical URL
    this.setCanonicalUrl('https://welfasthearing.com.au/Services');
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

  ngOnInit(): void {
    this.loadServicesFromAPI();
    this.servicesService.setSchema(this.schemaOrgJson);
  }
  ngOnDestroy() {
    this.servicesService.removeSchema();
  }

  loadServicesFromAPI(): void {
    this.loading = true;

    this.servicesService.get_services().subscribe({
      next: (response: any) => {
        this.loading = false;
        //console.log('API Response:', response); // Debug log

        if (response.success && response.data) {
          // Map API data to your existing structure
          this.services = response.data.map((apiService: any) => ({
            // Map API fields to your UI structure
            title: apiService.heading, // API 'heading' → UI 'title'
            fullContent: apiService.content, // API 'content' → UI 'fullText'
            image: environment.url + apiService.image,
            slug: this.toSeoFriendly(apiService.heading), // Create full image URL

            // Keep your existing UI functionality
            showMore: false, // Default collapsed state

            // Add default subsections if you want (optional)
            subsections: [
              // You can populate these from API if available, or leave empty
              // {
              //   title: "Key Features",
              //   content: "",
              //   points: []
              // }
            ],
          }));
          //console.log('Mapped Services:', this.services); // Debug log
        } else {
          console.error('API response not successful:', response);
        }
      },
      error: (error: any) => {
        this.loading = false;
        console.error('Error loading services:', error);

        // Optional: Add fallback data or error handling
        this.services = [];
      },
    });
  }
  toSeoFriendly(text: string): string {
    return text
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-') // replace spaces with dashes
      .replace(/[^\w\-]+/g, '') // remove non-word characters
      .replace(/\-\-+/g, '-') // replace multiple dashes with one
      .replace(/^-+/, '') // trim dashes from start
      .replace(/-+$/, ''); // trim dashes from end
  }

  // If collapsed: navigate to details page. If expanded: collapse inline.
  toggleReadMore(card: any): void {
    if (!card.showMore) {
      // Navigate to details page when clicking 'Read More'
      this.router.navigate(['/service-details', card.slug], {
        state: { card },
      });
    } else {
      // When already expanded, 'Read Less' collapses the card
      card.showMore = false;
    }
  }

  // If you want to add subsections dynamically from API data, use this method
  // (Optional - only if your API provides additional structured content)
  private parseAdditionalContent(content: string): any[] {
    // Example: If your API content has structured data
    // You can parse it here to create subsections
    // For now, return empty array to keep existing functionality
    return [];
  }

  // Optional: Method to refresh services
  refreshServices(): void {
    this.loadServicesFromAPI();
  }
}
