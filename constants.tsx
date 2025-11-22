import { Shield, Zap, Globe, Crown, CreditCard, Smartphone, Gift, Lock } from 'lucide-react';
import { Feature, NavItem, Testimonial, Stat } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Benefits', href: '#benefits' },
  { label: 'Experience', href: '#experience' },
  { label: 'Apply', href: '#apply' },
];

export const FEATURES: Feature[] = [
  {
    id: 1,
    title: 'Global Access',
    description: 'Unrestricted access to over 1,200 airport lounges worldwide. Your comfort knows no borders.',
    icon: Globe,
  },
  {
    id: 2,
    title: 'Zero Forex',
    description: 'Spend internationally with 0% markup fees. The world is your marketplace.',
    icon: Globe,
  },
  {
    id: 3,
    title: 'Titanium Shield',
    description: 'State-of-the-art fraud protection with 24/7 dedicated concierge monitoring.',
    icon: Shield,
  },
  {
    id: 4,
    title: 'Instant Metal',
    description: 'Request a replacement metal card instantly via the app. Delivered in 24 hours.',
    icon: Zap,
  },
  {
    id: 5,
    title: 'Elite Rewards',
    description: '5x reward points on dining and travel. Redeem for luxury experiences, not just vouchers.',
    icon: Crown,
  },
  {
    id: 6,
    title: 'Contactless 2.0',
    description: 'Next-gen NFC chip for secure, lightning-fast payments anywhere.',
    icon: Smartphone,
  },
  {
    id: 7,
    title: 'Concierge',
    description: 'Your personal assistant, available 24/7 to book tables, flights, and impossible tickets.',
    icon: Gift,
  },
  {
    id: 8,
    title: 'Cyber Security',
    description: 'Dynamic CVV technology within the app ensures your online transactions are hack-proof.',
    icon: Lock,
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Alexander V.',
    role: 'Venture Capitalist',
    content: 'I’ve used Amex Centurion, but IndusInd Bank Black feels different. It’s quieter about its luxury.',
    avatar: 'https://picsum.photos/100/100?random=1',
  },
  {
    id: 2,
    name: 'Priya S.',
    role: 'Tech CEO',
    content: 'The 0% forex fee saved me thousands last year. Finally, a card that understands modern travel.',
    avatar: 'https://picsum.photos/100/100?random=2',
  },
  {
    id: 3,
    name: 'Marcus L.',
    role: 'Michelin Chef',
    content: 'The concierge got me a table at a booked-out Tokyo restaurant in 30 minutes. Unreal service.',
    avatar: 'https://picsum.photos/100/100?random=3',
  },
  {
    id: 4,
    name: 'Elena R.',
    role: 'Art Collector',
    content: 'Sleek, heavy, and accepted everywhere. The metal finish is a conversation starter.',
    avatar: 'https://picsum.photos/100/100?random=4',
  },
  {
    id: 5,
    name: 'David K.',
    role: 'Startup Founder',
    content: 'Butter smooth app experience. Not everybody gets it, but those who do, never go back.',
    avatar: 'https://picsum.photos/100/100?random=5',
  },
];

export const STATS: Stat[] = [
  { value: '24/7', label: 'Concierge Access' },
  { value: '0%', label: 'Forex Markup' },
  { value: '∞', label: 'Lounge Access' },
];