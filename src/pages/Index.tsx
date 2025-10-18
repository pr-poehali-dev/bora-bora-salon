import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      title: 'Уход за лицом',
      description: 'Профессиональные процедуры для сияющей кожи',
      icon: 'Sparkles',
      price: 'от 3 500 ₽'
    },
    {
      title: 'Массаж',
      description: 'Расслабляющие и терапевтические техники',
      icon: 'HandHeart',
      price: 'от 4 000 ₽'
    },
    {
      title: 'Маникюр & Педикюр',
      description: 'Безупречный уход за руками и ногами',
      icon: 'Gem',
      price: 'от 2 500 ₽'
    },
    {
      title: 'Макияж',
      description: 'Профессиональный макияж для любого случая',
      icon: 'Palette',
      price: 'от 3 000 ₽'
    },
    {
      title: 'Укладка волос',
      description: 'Стильные образы от наших мастеров',
      icon: 'Scissors',
      price: 'от 2 000 ₽'
    },
    {
      title: 'SPA-процедуры',
      description: 'Комплексные программы ухода и релакса',
      icon: 'Flower2',
      price: 'от 5 000 ₽'
    }
  ];

  const priceList = [
    { category: 'Уход за лицом', items: [
      { name: 'Чистка лица', price: '3 500 ₽' },
      { name: 'Пилинг', price: '4 000 ₽' },
      { name: 'Маска для лица', price: '2 500 ₽' },
      { name: 'Массаж лица', price: '3 000 ₽' }
    ]},
    { category: 'Массаж', items: [
      { name: 'Классический массаж (60 мин)', price: '4 000 ₽' },
      { name: 'Расслабляющий массаж (90 мин)', price: '6 000 ₽' },
      { name: 'Антицеллюлитный массаж', price: '5 000 ₽' }
    ]},
    { category: 'Маникюр & Педикюр', items: [
      { name: 'Маникюр классический', price: '2 500 ₽' },
      { name: 'Педикюр классический', price: '3 000 ₽' },
      { name: 'Покрытие гель-лак', price: '1 500 ₽' },
      { name: 'Дизайн ногтей', price: 'от 500 ₽' }
    ]}
  ];

  const testimonials = [
    {
      name: 'Елена Петрова',
      text: 'Bora Bora — это настоящий оазис красоты! Профессионализм мастеров и роскошная атмосфера делают каждое посещение особенным.',
      rating: 5
    },
    {
      name: 'Анна Смирнова',
      text: 'Великолепный салон! Внимательное отношение к каждой детали, качественные процедуры и потрясающий результат.',
      rating: 5
    },
    {
      name: 'Мария Волкова',
      text: 'Рекомендую всем! Современное оборудование, профессиональные мастера и приятная атмосфера.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-gold/20">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold text-gold tracking-wide">Bora Bora</h1>
            <div className="hidden md:flex gap-8">
              {['home', 'services', 'price', 'reviews', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm uppercase tracking-wider transition-colors ${
                    activeSection === section ? 'text-gold' : 'text-primary-foreground hover:text-gold'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'services' && 'Услуги'}
                  {section === 'price' && 'Прайс'}
                  {section === 'reviews' && 'Отзывы'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <section id="home" className="relative min-h-screen flex items-center pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.6), rgba(10, 10, 10, 0.4)), url('https://cdn.poehali.dev/projects/5436630a-1a59-4aa0-bcf0-3a673bc766f8/files/90fde56f-9212-4c10-a730-71e971a25870.jpg')`
          }}
        />
        <div className="container mx-auto px-4 relative z-10 animate-fade-in">
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Роскошь и<br />элегантность
            </h2>
            <p className="text-xl md:text-2xl text-cream/90 mb-8 font-light">
              Премиальный салон красоты в центре Новокузнецка
            </p>
            <Button 
              onClick={() => scrollToSection('contacts')}
              className="bg-gold hover:bg-gold/90 text-primary px-8 py-6 text-lg font-medium transition-all hover:scale-105"
            >
              Записаться на процедуру
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Профессиональный уход и безупречный результат</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card border-gold/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="mb-4 text-gold">
                    <Icon name={service.icon} size={48} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-primary">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <p className="text-xl font-semibold text-gold">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="price" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">Прайс-лист</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Цены на наши услуги</p>
          <div className="max-w-4xl mx-auto space-y-8">
            {priceList.map((category, idx) => (
              <Card key={idx} className="border-gold/20 bg-card animate-fade-in" style={{ animationDelay: `${idx * 0.15}s` }}>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gold">{category.category}</h3>
                  <div className="space-y-4">
                    {category.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                        <span className="text-foreground">{item.name}</span>
                        <span className="font-semibold text-gold">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">Отзывы клиентов</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Что говорят о нас</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="bg-card border-gold/20 hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex mb-4 text-gold">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-primary">— {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gold">Контакты</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" size={24} className="text-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Адрес:</p>
                    <p className="text-primary-foreground/80">г. Новокузнецк, ул. Примерная, 123</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Phone" size={24} className="text-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Телефон:</p>
                    <p className="text-primary-foreground/80">+7 (900) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Clock" size={24} className="text-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Режим работы:</p>
                    <p className="text-primary-foreground/80">Ежедневно с 10:00 до 21:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Mail" size={24} className="text-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Email:</p>
                    <p className="text-primary-foreground/80">info@borabora-nk.ru</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Card className="bg-card border-gold/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-primary">Записаться на процедуру</h3>
                  <form className="space-y-4">
                    <div>
                      <Input 
                        placeholder="Ваше имя" 
                        className="border-gold/30 focus:border-gold"
                      />
                    </div>
                    <div>
                      <Input 
                        type="tel"
                        placeholder="Телефон" 
                        className="border-gold/30 focus:border-gold"
                      />
                    </div>
                    <div>
                      <Input 
                        placeholder="Желаемая услуга" 
                        className="border-gold/30 focus:border-gold"
                      />
                    </div>
                    <div>
                      <Textarea 
                        placeholder="Комментарий (необязательно)" 
                        className="border-gold/30 focus:border-gold min-h-[100px]"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-gold hover:bg-gold/90 text-primary py-6 text-lg font-medium transition-all hover:scale-105"
                    >
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary/50 text-primary-foreground py-8 border-t border-gold/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold font-bold text-xl mb-2">Bora Bora</p>
          <p className="text-primary-foreground/60">Салон красоты премиум-класса в Новокузнецке</p>
          <p className="text-primary-foreground/60 mt-4 text-sm">© 2024 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
