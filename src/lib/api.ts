// CMS API client for fetching dynamic content

// Basic fetch wrapper with error handling
export async function fetchFromCMS<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const baseUrl = process.env.NEXT_PUBLIC_CMS_API_URL;
  const url = `${baseUrl}${endpoint}`;
  
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        // Add any required authentication headers
        // 'Authorization': `Bearer ${process.env.CMS_API_KEY}`,
      },
      ...options
    });
    
    if (!response.ok) {
      throw new Error(`CMS API error: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching from CMS:', error);
    throw error;
  }
}

// Blog posts specific fetcher
export async function getBlogs() {
  return fetchFromCMS<any>('/blogs?populate=*');
}

// Contact form submission
export async function submitContactForm(formData: any) {
  return fetchFromCMS<any>('/contact-forms', {
    method: 'POST',
    body: JSON.stringify({data: formData}),
  });
}

// Add any other specific CMS fetching functions your application needs 