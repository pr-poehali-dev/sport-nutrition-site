import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const categories = [
    { name: 'Протеин', icon: 'Dumbbell', color: 'bg-primary' },
    { name: 'Аминокислоты', icon: 'Droplets', color: 'bg-secondary' },
    { name: 'Энергетики', icon: 'Zap', color: 'bg-accent' },
    { name: 'Витамины', icon: 'Sparkles', color: 'bg-primary' }
  ];

  const products = [
    {
      id: 1,
      name: 'Whey Protein Isolate',
      category: 'Протеин',
      price: 3499,
      image: 'https://cdn.poehali.dev/projects/8bb6e9e0-1bb6-4f6d-a427-96f592641c64/files/cbde9cb8-9ac5-4ca4-9da7-9abf201474a1.jpg',
      badge: 'ХИТ'
    },
    {
      id: 2,
      name: 'BCAA Complex',
      category: 'Аминокислоты',
      price: 1899,
      image: 'https://cdn.poehali.dev/projects/8bb6e9e0-1bb6-4f6d-a427-96f592641c64/files/0f0809a2-86e3-43f2-977e-702f7f624b4a.jpg',
      badge: 'НОВИНКА'
    },
    {
      id: 3,
      name: 'Energy Drink Pre-Workout',
      category: 'Энергетики',
      price: 2299,
      image: 'https://cdn.poehali.dev/projects/8bb6e9e0-1bb6-4f6d-a427-96f592641c64/files/bfef9d7a-37b8-4c2f-8d6c-aacdafdd2e62.jpg',
      badge: 'ХИТ'
    },
    {
      id: 4,
      name: 'Creatine Monohydrate',
      category: 'Добавки',
      price: 1599,
      image: 'https://cdn.poehali.dev/projects/8bb6e9e0-1bb6-4f6d-a427-96f592641c64/files/cbde9cb8-9ac5-4ca4-9da7-9abf201474a1.jpg',
      badge: ''
    },
    {
      id: 5,
      name: 'Omega-3',
      category: 'Витамины',
      price: 999,
      image: 'https://cdn.poehali.dev/projects/8bb6e9e0-1bb6-4f6d-a427-96f592641c64/files/0f0809a2-86e3-43f2-977e-702f7f624b4a.jpg',
      badge: ''
    },
    {
      id: 6,
      name: 'Mass Gainer',
      category: 'Протеин',
      price: 2899,
      image: 'https://cdn.poehali.dev/projects/8bb6e9e0-1bb6-4f6d-a427-96f592641c64/files/bfef9d7a-37b8-4c2f-8d6c-aacdafdd2e62.jpg',
      badge: ''
    }
  ];

  const navItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'catalog', label: 'Каталог', icon: 'ShoppingBag' },
    { id: 'about', label: 'О нас', icon: 'Info' },
    { id: 'delivery', label: 'Доставка', icon: 'Truck' },
    { id: 'payment', label: 'Оплата', icon: 'CreditCard' },
    { id: 'contacts', label: 'Контакты', icon: 'Phone' }
  ];

  const renderContent = () => {
    switch(activeSection) {
      case 'about':
        return (
          <div className="container mx-auto px-4 py-16 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">О нас</h1>
            <div className="space-y-6 text-lg">
              <p>
                Мы — команда профессионалов, которые любят спорт и здоровый образ жизни. 
                Наш магазин предлагает только качественные и проверенные продукты спортивного питания.
              </p>
              <p>
                Более 5 лет мы помогаем спортсменам достигать своих целей, предоставляя широкий ассортимент 
                протеинов, аминокислот, витаминов и других добавок от ведущих мировых производителей.
              </p>
            </div>
          </div>
        );
      case 'delivery':
        return (
          <div className="container mx-auto px-4 py-16 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Доставка</h1>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Truck" size={24} className="text-primary" />
                    Курьерская доставка
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>По Москве — 1-2 дня, от 300 руб</p>
                  <p className="text-sm text-muted-foreground mt-2">Бесплатно при заказе от 3000 руб</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Package" size={24} className="text-secondary" />
                    Пункты выдачи
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>По всей России — 3-5 дней, от 200 руб</p>
                  <p className="text-sm text-muted-foreground mt-2">Бесплатно при заказе от 5000 руб</p>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      case 'payment':
        return (
          <div className="container mx-auto px-4 py-16 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Оплата</h1>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="CreditCard" size={24} className="text-primary" />
                    Картой онлайн
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Visa, MasterCard, МИР</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Wallet" size={24} className="text-secondary" />
                    При получении
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Наличными или картой</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Building" size={24} className="text-accent" />
                    Для юрлиц
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Безналичный расчет</p>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      case 'contacts':
        return (
          <div className="container mx-auto px-4 py-16 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Контакты</h1>
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Icon name="Phone" size={24} className="text-primary" />
                      <span className="text-lg">+7 (495) 123-45-67</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Mail" size={24} className="text-secondary" />
                      <span className="text-lg">info@sportnutrition.ru</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="MapPin" size={24} className="text-accent" />
                      <span className="text-lg">г. Москва, ул. Спортивная, д. 10</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Clock" size={24} className="text-primary" />
                      <span className="text-lg">Пн-Вс: 9:00 - 21:00</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      case 'catalog':
      case 'home':
      default:
        return (
          <>
            {activeSection === 'home' && (
              <section className="relative bg-gradient-to-br from-primary via-secondary to-accent text-white py-20 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="container mx-auto px-4 relative z-10">
                  <div className="max-w-3xl mx-auto text-center animate-fade-in">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                      Твоя цель — наша миссия
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 opacity-90">
                      Спортивное питание от мировых брендов для достижения максимальных результатов
                    </p>
                    <Button 
                      size="lg" 
                      className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto"
                      onClick={() => setActiveSection('catalog')}
                    >
                      Перейти в каталог
                      <Icon name="ArrowRight" size={20} className="ml-2" />
                    </Button>
                  </div>
                </div>
              </section>
            )}

            <section className="container mx-auto px-4 py-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Категории товаров</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                {categories.map((category, index) => (
                  <Card 
                    key={index} 
                    className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardContent className="pt-6 text-center">
                      <div className={`${category.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <Icon name={category.icon} size={32} className="text-white" />
                      </div>
                      <h3 className="font-semibold text-lg">{category.name}</h3>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Популярные товары</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <Card 
                    key={product.id} 
                    className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      {product.badge && (
                        <Badge className="absolute top-4 right-4 bg-primary text-white">
                          {product.badge}
                        </Badge>
                      )}
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{product.name}</CardTitle>
                      </div>
                      <p className="text-sm text-muted-foreground">{product.category}</p>
                    </CardHeader>
                    <CardFooter className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-primary">{product.price} ₽</span>
                      <Button className="group-hover:bg-primary">
                        <Icon name="ShoppingCart" size={18} className="mr-2" />
                        В корзину
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Icon name="Flame" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold">SportNutrition</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Search" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="User" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <Icon name="ShoppingCart" size={20} />
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </Button>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                onClick={() => setActiveSection(item.id)}
                className="flex items-center gap-2"
              >
                <Icon name={item.icon} size={16} />
                {item.label}
              </Button>
            ))}
          </div>
        </nav>
      </header>

      <main>
        {renderContent()}
      </main>

      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Flame" size={28} className="text-primary" />
                <h3 className="text-xl font-bold">SportNutrition</h3>
              </div>
              <p className="text-gray-400">Твоя цель — наша миссия</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Протеин</li>
                <li>Аминокислоты</li>
                <li>Энергетики</li>
                <li>Витамины</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-400">
                <li>О нас</li>
                <li>Доставка</li>
                <li>Оплата</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@sportnutrition.ru</li>
                <li>Пн-Вс: 9:00 - 21:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 SportNutrition. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
