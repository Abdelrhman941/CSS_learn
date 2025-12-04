
export enum View {
  FOUNDATIONS = 'Foundations',
  BOX_MODEL = 'Box Model',
  FLEXBOX = 'Flexbox',
  GRID = 'CSS Grid',
  POSITIONING = 'Positioning',
  RESPONSIVE = 'Responsive',
  TYPOGRAPHY = 'Typography',
  ANIMATIONS = 'Animations',
}

export interface NavItem {
  id: View;
  label: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
