const nextConfig = {
  async redirects() {
    return [
      { source: '/:path*', has: [{ type: 'host', value: 'aiplun-software-studio.vercel.app' }], destination: 'https://aiplun-studio.jp/:path*', permanent: true },
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/latest.html', destination: '/', permanent: true },
      { source: '/plans.html', destination: '/plans', permanent: true },
      { source: '/privacy.html', destination: '/privacy', permanent: true },
      { source: '/legal.html', destination: '/legal', permanent: true },
      { source: '/terms.html', destination: '/terms', permanent: true }
    ];
  }
};

export default nextConfig;
