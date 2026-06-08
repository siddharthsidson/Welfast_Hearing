// detailed-page.component.ts
import { Meta, Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-detailed-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detailed-page.component.html',
  styleUrl: './detailed-page.component.css',
})
export class DetailedPageComponent implements OnInit, OnDestroy {
  pageData = {
    title: '',
    description: '',
    content: '',
    image: '',
    slug: '',
    hasContent: false,
  };

  loading = true;

  schemaOne = {
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
        '@type': 'WebPage',
        '@id':
          'https://welfasthearing.com.au/micro-suction-ear-wax-removal-in-central-coast-lake-macquarie/#webpage',
        url: 'https://welfasthearing.com.au/micro-suction-ear-wax-removal-in-central-coast-lake-macquarie/',
        name: 'Micro Suction Ear Wax Removal in Central Coast & Lake Macquarie',
        description:
          'Professional microsuction ear wax removal service in Central Coast and Lake Macquarie. Safe, gentle, and effective ear cleaning performed by trained hearing specialists.',
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
        inLanguage: 'en-AU',
      },
      {
        '@type': 'Service',
        '@id':
          'https://welfasthearing.com.au/micro-suction-ear-wax-removal/#service',
        name: 'Micro Suction Ear Wax Removal',
        serviceType: 'Ear Wax Removal',
        description:
          'Safe and professional microsuction ear wax removal using gentle suction technology under direct visual guidance. Helps relieve blocked ears, hearing loss due to wax, and discomfort.',
        provider: {
          '@id': 'https://welfasthearing.com.au/#localbusiness',
        },
        areaServed: [
          {
            '@type': 'Place',
            name: 'Central Coast',
          },
          {
            '@type': 'Place',
            name: 'Lake Macquarie',
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        '@id':
          'https://welfasthearing.com.au/micro-suction-ear-wax-removal/#breadcrumb',
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
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Micro Suction Ear Wax Removal',
            item: 'https://welfasthearing.com.au/micro-suction-ear-wax-removal-in-central-coast-lake-macquarie/',
          },
        ],
      },
    ],
  };

  schemaTwo = {
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
        '@type': 'WebPage',
        '@id':
          'https://welfasthearing.com.au/comprehensive-hearing-tests/#webpage',
        url: 'https://welfasthearing.com.au/comprehensive-hearing-tests-in-central-coast-lake-macquarie/',
        name: 'Comprehensive Hearing Tests in Central Coast & Lake Macquarie',
        description:
          'Comprehensive hearing tests in Central Coast and Lake Macquarie. Professional audiology assessments to detect hearing loss, tinnitus, and hearing health issues.',
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
        inLanguage: 'en-AU',
      },
      {
        '@type': 'Service',
        '@id':
          'https://welfasthearing.com.au/comprehensive-hearing-tests/#service',
        name: 'Comprehensive Hearing Tests',
        serviceType: 'Audiology Hearing Assessment',
        description:
          'Full diagnostic hearing assessment including pure tone audiometry, speech testing, tympanometry, and ear health evaluation to detect hearing loss and related conditions.',
        provider: {
          '@id': 'https://welfasthearing.com.au/#localbusiness',
        },
        areaServed: [
          {
            '@type': 'Place',
            name: 'Central Coast',
          },
          {
            '@type': 'Place',
            name: 'Lake Macquarie',
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        '@id':
          'https://welfasthearing.com.au/comprehensive-hearing-tests/#breadcrumb',
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
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Comprehensive Hearing Tests',
            item: 'https://welfasthearing.com.au/comprehensive-hearing-tests-in-central-coast-lake-macquarie/',
          },
        ],
      },
    ],
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private titleService: Title,
    private meta: Meta,
    private servicesService: ServiceService
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.loadContent();
      this.loading = false;
      this.setSchema();
    }, 300);
  }

  ngOnDestroy() {
    this.servicesService.removeSchema();
  }

  private loadContent(): void {
    // Try to get card data from navigation state first
    const stateCard = history.state?.card;

    if (stateCard) {
      this.setPageData(stateCard);
      return;
    }

    // Fallback: user opened URL directly — get slug from route
    const slug = this.route.snapshot.paramMap.get('slug');
    if (!slug) {
      this.router.navigate(['/']);
      return;
    }

    const routeType = this.route.snapshot.data['type'];

    if (routeType === 'service') {
      this.loadServiceBySlug(slug);
      return;
    }

    if (routeType === 'service-or-blog') {
      // Try service first, then blog
      this.loadServiceBySlug(slug, true);
      return;
    }

    // For other route types, show a fallback message
    console.warn('No card data from navigation state. Fetch data using slug:', slug);
    this.pageData.title = 'Content not available';
    this.pageData.description = '';
    this.pageData.content =
      'Please navigate from the homepage or fetch content dynamically by slug.';
    this.pageData.hasContent = true;

    this.titleService.setTitle('Welfast Hearing - Details');
    this.meta.updateTag({
      name: 'description',
      content: this.pageData.description,
    });
  }

  private setPageData(card: any) {
    this.pageData.title = card.title;
    this.pageData.description = card.metaDesc;
    this.pageData.content = card.fullContent;
    this.pageData.image = card.image;
    this.pageData.slug = card.slug;
    this.pageData.hasContent = true;

    // Set SEO-friendly meta tags
    this.titleService.setTitle(`${card.title} - Welfast Hearing`);
    this.meta.updateTag({ name: 'description', content: card.metaDesc });
    this.meta.updateTag({ property: 'og:title', content: card.title });
    this.meta.updateTag({
      property: 'og:description',
      content: card.metaDesc,
    });
    this.meta.updateTag({ property: 'og:image', content: card.image });
    this.meta.updateTag({
      property: 'og:url',
      content: `https://welfasthearing.com.au/${card.slug}`,
    });
  }

  private loadServiceBySlug(slug: string, tryBlogFallback: boolean = false): void {
    this.servicesService.get_services().subscribe({
      next: (response: any) => {
        if (!response?.success || !response?.data) {
          if (tryBlogFallback) {
            this.loadBlogBySlug(slug);
          } else {
            this.handleNotFound(slug);
          }
          return;
        }

        const matchedService = response.data
          .map((apiService: any) => ({
            title: apiService.heading,
            metaDesc: apiService.meta_desc,
            fullContent: apiService.content,
            image: environment.url + apiService.image,
            slug: this.toSeoFriendly(apiService.url_),
          }))
          .find((service: any) => service.slug === slug);

        if (matchedService) {
          this.setPageData(matchedService);
        } else if (tryBlogFallback) {
          this.loadBlogBySlug(slug);
        } else {
          this.handleNotFound(slug);
        }
      },
      error: () => {
        if (tryBlogFallback) {
          this.loadBlogBySlug(slug);
        } else {
          this.handleNotFound(slug);
        }
      }
    });
  }

  private loadBlogBySlug(slug: string): void {
    this.servicesService.get_Blogs().subscribe({
      next: (response: any) => {
        if (!response?.success || !response?.data) {
          this.handleNotFound(slug);
          return;
        }

        const matchedBlog = response.data
          .map((blog: any) => ({
            title: blog.heading,
            metaDesc: blog.meta_description || blog.meta_desc || blog.content?.substring(0, 160),
            fullContent: blog.content,
            image: environment.url + blog.image,
            slug: this.createSlug(blog.meta_title || blog.title || blog.heading),
          }))
          .find((blog: any) => blog.slug === slug);

        if (matchedBlog) {
          this.setPageData(matchedBlog);
        } else {
          this.handleNotFound(slug);
        }
      },
      error: () => this.handleNotFound(slug),
    });
  }

  private createSlug(title: string): string {
    if (!title) return '';
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  private handleNotFound(slug: string): void {
    console.warn('Content not found for slug:', slug);
    this.pageData.title = 'Content not found';
    this.pageData.description = '';
    this.pageData.content =
      'The page you requested could not be found. Please return to home.';
    this.pageData.hasContent = true;
    this.titleService.setTitle('Not Found - Welfast Hearing');
    this.meta.updateTag({ name: 'description', content: this.pageData.description });
  }

  private toSeoFriendly(text: string): string {
    if (!text) return '';
    return text
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  }

  getFormattedContent(): string {
    if (!this.pageData.content) return '<p>No content available.</p>';
    return `<p>${this.pageData.content.replace(/\n/g, '<br>')}</p>`;
  }

  goBack(): void {
    if (window.history.length > 1) window.history.back();
    else this.router.navigate(['/']);
  }

  bookConsultation(): void {
    this.router.navigate(['/Contact-us'], { fragment: 'contactForm' });
  }

  callNow(): void {
    window.open('tel:0243115511');
  }

  navigateHome(): void {
    this.router.navigate(['/']);
  }

  hasImage(): boolean {
    return !!this.pageData.image;
  }
  setSchema() {
    let title = this.pageData.title;
    if(title === 'Micro Suction Ear Wax Removal in Central Coast & Lake Macquarie'){
      this.servicesService.setSchema(this.schemaOne);
      console.log('Schema One loaded');
    }
    else if(title === 'Comprehensive Hearing Tests in Central Coast & Lake Macquarie'){
      this.servicesService.setSchema(this.schemaTwo);
      console.log('Schema Two loaded');
    }
    else{
      console.log('No Schema Detected');
    }
  }
}
