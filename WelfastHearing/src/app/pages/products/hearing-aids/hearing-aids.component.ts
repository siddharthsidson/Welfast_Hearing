import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ServiceService } from '../../../services/service.service';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';
import { SafeHtmlPipe } from '../../services/safe-html.pipe';

@Component({
  selector: 'app-hearing-aids',
  standalone: true,
  imports: [CommonModule, SafeHtmlPipe],
  templateUrl: './hearing-aids.component.html',
  styleUrl: './hearing-aids.component.css',
})
export class HearingAidsComponent {
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
        ],
        knowsAbout: [
          'Hearing Aids',
          'Bluetooth Hearing Aids',
          'Rechargeable Hearing Aids',
          'Digital Hearing Aids',
          'Audiology Services',
          'Hearing Loss Management',
        ],
      },
      {
        '@type': 'WebPage',
        '@id': 'https://welfasthearing.com.au/Hearing-aids/#webpage',
        url: 'https://welfasthearing.com.au/Hearing-aids',
        name: 'Hearing Aids in Central Coast & Lake Macquarie',
        description:
          'Explore advanced hearing aids including Bluetooth, rechargeable and discreet hearing solutions in Central Coast and Lake Macquarie at Welfast Hearing.',
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
        '@id': 'https://welfasthearing.com.au/Hearing-aids/#service',
        name: 'Hearing Aid Solutions',
        serviceType: 'Audiology Hearing Aid Fitting & Support',
        description:
          'Professional hearing aid services including consultation, fitting, adjustment and support for Bluetooth, rechargeable and advanced digital hearing aids.',
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
        '@type': 'ItemList',
        '@id': 'https://welfasthearing.com.au/Hearing-aids/#types',
        name: 'Types of Hearing Aids',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Bluetooth Hearing Aids',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Rechargeable Hearing Aids',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Behind-the-Ear (BTE) Hearing Aids',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'In-the-Ear (ITE) Hearing Aids',
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'Invisible Hearing Aids',
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://welfasthearing.com.au/Hearing-aids/#breadcrumb',
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
            name: 'Hearing Aids',
            item: 'https://welfasthearing.com.au/Hearing-aids',
          },
        ],
      },
    ],
  };
  constructor(
    private meta: Meta,
    private title: Title,
    private serviceService: ServiceService,
    private router: Router,
    @Inject(DOCUMENT) private document: Document,
  ) {
    // Set page title
    this.title.setTitle(
      'Hearing Aids in Central Coast | Bluetooth & Rechargeable Options',
    );

    // Set meta title
    this.meta.updateTag({
      name: 'title',
      content:
        'Hearing Aids & Devices | Welfast Hearing',
    });

    // Set meta description
    this.meta.updateTag({
      name: 'description',
      content:
        'Explore hearing aids and devices at Welfast Hearing, including rechargeable, BTE, custom, Oticon and assistive listening solutions tailored to your needs.',
    });

    // Set keywords
    this.meta.updateTag({
      name: 'keywords',
      content:
        'Hearing Aids in Central Coast, Bluetooth Hearing Aids, Rechargeable Hearing Aids, Digital Hearing Aids Central Coast, Hearing Aid Fitting Central Coast, Advanced Hearing Aids',
    });

    // Set Open Graph tags
    this.meta.updateTag({
      property: 'og:title',
      content:
        'Hearing Aids in Central Coast | Bluetooth & Rechargeable Options',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'High-quality hearing aids including Bluetooth and rechargeable options in Central Coast.',
    });
    this.meta.updateTag({
      property: 'og:image',
      content:
        'https://welfasthearing.com.au/assets/hearingProducts/earbudtype.webp',
    });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://welfasthearing.com.au/Hearing-aids',
    });

    // Set canonical URL
    this.setCanonicalUrl('https://welfasthearing.com.au/Hearing-aids');
  }
  private setCanonicalUrl(url: string) {
    const existing = this.document.querySelector(
      "link[rel='canonical']",
    ) as HTMLLinkElement;

    if (existing) {
      existing.remove();
    }
    // Create and append
    const link = this.document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', url);
    this.document.head.appendChild(link);
  }

  // Your existing arrays - these will be populated from API
  hearingAidsList: any[] = [];
  hearingAidAccessoriesList: any[] = [];
  assistiveListeningDevicesList: any[] = [];

  loading = true;

  ngOnInit(): void {
    this.loadProductsFromAPI();
    this.addProductSchema();
    this.serviceService.setSchema(this.schemaOrgJson);
  }
  ngOnDestroy() {
    this.serviceService.removeSchema();
  }

  addProductSchema() {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: this.hearingAidsList.map((item, index) => ({
        '@type': 'Product',
        position: index + 1,
        name: item.title,
        image: item.image,
        description: item.description,
        brand: {
          '@type': 'Brand',
          name: 'Welfast Hearing',
        },
        url: `https://welfasthearing.com.au/product-details/${item.slug}`,
      })),
    };

    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    this.document.head.appendChild(script);
  }

  loadProductsFromAPI(): void {
    this.loading = true;

    this.serviceService.get_Products().subscribe({
      next: (response) => {
        this.loading = false;
        //console.log('Products API Response:', response); // Debug log

        if (response.success && response.data) {
          // Process all products from API
          const allProducts = response.data.map((apiProduct: any) => ({
            // Map API fields to your UI structure
            title: apiProduct.heading, // API 'heading' → UI 'title'
            subtitle: this.generateSubtitle(apiProduct.heading), // Generate subtitle from title
            description: apiProduct.content, // API 'content' → UI 'description'
            image: environment.url + apiProduct.image, // Create full image URL
            type: apiProduct.type, // Keep the type for filtering
            slug: this.toSeoFriendly(apiProduct.heading),
          }));
          //console.log('All Products:', allProducts); // Debug log
          // Filter products by type into separate arrays
          this.hearingAidsList = allProducts.filter(
            (product: any) => product.type === 'hearing-a',
          );

          this.hearingAidAccessoriesList = allProducts.filter(
            (product: any) => product.type === 'hearing-b',
          );

          this.assistiveListeningDevicesList = allProducts.filter(
            (product: any) => product.type === 'hearing-c',
          );

          //console.log('Hearing Aids:', this.hearingAidsList);
          //console.log('Accessories:', this.hearingAidAccessoriesList);
          //console.log('Assistive Devices:', this.assistiveListeningDevicesList);
        } else {
          console.error('API response not successful:', response);
          this.setFallbackData(); // Optional: Set empty or fallback data
        }
      },
      error: (error) => {
        this.loading = false;
        console.error('Error loading products:', error);
        this.setFallbackData(); // Optional: Set empty or fallback data
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
  veiw_product(card: any): void {
    this.router.navigate(['/product-details', card.slug], { state: { card } });
  }

  // Generate a subtitle from the title (optional - you can customize this)
  generateSubtitle(title: string): string {
    // You can customize this logic based on your needs
    // For now, it creates a simple subtitle
    return `Advanced ${title.toLowerCase()} technology`;
  }

  // Optional: Set empty arrays if API fails
  setFallbackData(): void {
    this.hearingAidsList = [];
    this.hearingAidAccessoriesList = [];
    this.assistiveListeningDevicesList = [];
  }

  // Optional: Method to refresh products
  refreshProducts(): void {
    this.loadProductsFromAPI();
  }

  // Optional: Get products by category (if you need it elsewhere)
  getProductsByType(type: string): any[] {
    switch (type) {
      case 'hearing-aids':
        return this.hearingAidsList;
      case 'hearing-aid-accessories':
        return this.hearingAidAccessoriesList;
      case 'assistive-listening-devices':
        return this.assistiveListeningDevicesList;
      default:
        return [];
    }
  }
}
