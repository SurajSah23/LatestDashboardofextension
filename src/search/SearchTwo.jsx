import { useState } from 'react';

const companiesData = [
  {
    id: 1,
    name: 'Catalog',
    website: 'catalogapp.io',
    logo: 'https://i.ibb.co/yYbRRGs/Avatar-9.png',
    members: 22,
    contact: {
      name: 'Phoenix Baker',
      role: 'Co-Founder',
      location: 'United States',
      avatar: 'https://i.ibb.co/zXpvP7n/Avatar-15.png'
    }
  },
  {
    id: 2,
    name: 'Circooles',
    website: 'getcircooles.com',
    logo: 'https://i.ibb.co/NVdthvs/Avatar-10.png',
    members: 22,
    contact: {
      name: 'Lana Steiner',
      role: 'Founder',
      location: 'UK',
      avatar: 'https://i.ibb.co/D8h1ns4/Avatar-16.png'
    }
  },
  {
    id: 3,
    name: 'Command+R',
    website: 'cmdr.ai',
    logo: 'https://i.ibb.co/Z6GQFCr/Avatar-11.png',
    members: 22,
    contact: {
      name: 'Demi Wilkinson',
      role: 'Founder',
      location: 'US',
      avatar: 'https://i.ibb.co/bBr7Cnb/Avatar-17.png'
    }
  },
  {
    id: 4,
    name: 'Hourglass',
    website: 'hourglass.app',
    logo: 'https://i.ibb.co/7WBVbKs/Avatar-12.png',
    members: 22,
    contact: {
      name: 'Candice Wu',
      role: 'Lead Designer',
      location: 'India',
      avatar: 'https://i.ibb.co/3YTXpbz/Avatar-18.png'
    }
  },
  {
    id: 5,
    name: 'Layers',
    website: 'getlayers.io',
    logo: 'https://i.ibb.co/T8VMBVQ/Avatar-13.png',
    members: 22,
    contact: {
      name: 'Natali Craig',
      role: 'Lead Designer',
      location: 'United States',
      avatar: 'https://i.ibb.co/0X0RBbJ/Avatar-19.png'
    }
  },
  {
    id: 6,
    name: 'Quotient',
    website: 'quotient.co',
    logo: 'https://i.ibb.co/CB3skXt/Avatar-22.png',
    members: 22,
    contact: {
      name: 'Drew Cano',
      role: 'Co-Founder',
      location: 'New York, US',
      avatar: 'https://i.ibb.co/Sf33rjp/Avatar-21.png'
    }
  },
  {
    id: 7,
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 8, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
  {
    id: 9, // Fixed duplicate ID
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logo: 'https://i.ibb.co/L5NXSMJ/Avatar-14.png',
    members: 22,
    contact: {
      name: 'Orlando Diggs',
      role: 'Co-Founder',
      location: 'India',
      avatar: 'https://i.ibb.co/5579dVd/Avatar-20.png'
    }
  },
];

function SearchTwo() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Reduced for demonstration
  const totalPages = Math.ceil(companiesData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCompanies = companiesData.slice(startIndex, endIndex);

  return (
    <div className="w-[800px] h-[850px] absolute top-1/3 left-8 rounded-lg border">
      {/* Header Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          <button className="border-b-2 border-blue-500 pb-4 px-1 text-sm font-medium text-blue-600">
            New(16.0M)
          </button>
          <button className="text-gray-500 pb-4 px-1 text-sm font-medium hover:text-gray-700">
            Saved (0)
          </button>
          <button className="text-gray-500 pb-4 px-1 text-sm font-medium hover:text-gray-700">
            Total(16.0M)
          </button>
        </nav>
      </div>

      {/* Table */}
      <div className="mt-6">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="py-3 px-3 text-left">
                <input 
                  type="checkbox" 
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
              </th>
              <th className="py-3 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Company
              </th>
              <th className="py-3 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Members
              </th>
              <th className="py-3 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Contact
              </th>
              <th className="py-3 px-3"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentCompanies.map((company) => (
              <tr key={company.id} className="hover:bg-gray-50">
                <td className="py-4 px-3">
                  <input 
                    type="checkbox" 
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </td>
                <td className="py-4 px-3">
                  <div className="flex items-center">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="h-8 w-8 rounded-full"
                    />
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{company.name}</div>
                      <div className="text-sm text-gray-500">{company.website}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-3">
                  <div className="text-sm text-gray-900">{company.members}</div>
                </td>
                <td className="py-4 px-3">
                  <div className="flex items-center">
                    <img
                      src={company.contact.avatar}
                      alt={company.contact.name}
                      className="h-8 w-8 rounded-full"
                    />
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {company.contact.name}
                      </div>
                      <div className="text-sm text-gray-500">{company.contact.role}</div>
                      <div className="text-sm text-gray-500">{company.contact.location}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-3 text-right">
                  <button className="px-3 py-1 text-sm text-blue-600 font-medium hover:bg-blue-50 rounded">
                    Show Mail
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex items-center justify-between px-3 py-3 border-t border-gray-200">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="flex items-center text-sm text-gray-700 font-medium disabled:opacity-50 hover:text-gray-900"
          >
            <img 
              src="https://img.icons8.com/ios-filled/50/000000/chevron-left.png" 
              alt="Previous" 
              className="w-4 h-4 mr-1"
            />
            Previous
          </button>
          <span className="text-sm text-gray-700">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="flex items-center text-sm text-gray-700 font-medium disabled:opacity-50 hover:text-gray-900"
          >
            Next
            <img 
              src="https://img.icons8.com/ios-filled/50/000000/chevron-right.png" 
              alt="Next" 
              className="w-4 h-4 ml-1"
            />
          </button>
        </div>
      </div>
          <br />
          <br />
          <br />
          <br />
    </div>
  );
}

export default SearchTwo;