export interface CarouselItem {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    backgroundImage: string;
    tag?: string;
    tagColor?: string;
    textColor?: string;
  }
  
  export interface GenerateItem {
    id: string;
    title: string;
    description: string;
    icon: string;
    isNew?: boolean;
    color: string;
    textColor: string;
  }