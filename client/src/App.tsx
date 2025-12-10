import { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { ProjectDetail } from './components/ProjectDetail';
import { UserProfile } from './components/UserProfile';
import { SearchProjects } from './components/SearchProjects';
import { CreateProject } from './components/CreateProject';
import { MyProjects } from './components/MyProjects';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Settings } from './components/Settings';
import { Toaster } from './components/ui/sonner';

type ViewType = 'dashboard' | 'search' | 'create' | 'myprojects' | 'detail' | 'profile' | 'settings' ;

export default function App() {
  const [activeView, setActiveView] = useState<ViewType>('dashboard');
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Set to false to show login screen
  const [authView, setAuthView] = useState<'login' | 'register'>('login');

  const handleProjectClick = () => {
    setActiveView('detail');
  };

  const handleMenuClick = (menu: string) => {
    switch (menu) {
      case 'home':
        setActiveView('dashboard');
        break;
      case 'search':
        setActiveView('search');
        break;
      case 'projects':
        setActiveView('myprojects');
        break;
      case 'profile':
        setActiveView('profile');
        break;
      default:
        setActiveView('dashboard');
    }
  };

  const handleBackToDashboard = () => {
    setActiveView('dashboard');
  };

  const handleCreateProject = () => {
    setActiveView('create');
  };

  const handleSettingsClick = () => {
    setActiveView('settings');
  };

  const handleProfileClick = () => {
    setActiveView('profile');
  };

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setActiveView('dashboard');
  };

  const renderActiveView = () => {
    switch (activeView) {
      case 'search':
        return <SearchProjects onProjectClick={handleProjectClick} />;
      case 'create':
        return <CreateProject />;
      case 'myprojects':
        return <MyProjects />;
      case 'detail':
        return <ProjectDetail onBack={handleBackToDashboard} />;
      case 'profile':
        return <UserProfile onBack={handleBackToDashboard} />;
      case 'settings':
        return <Settings onBack={handleBackToDashboard} />;
      default:
        return <Dashboard onProjectClick={handleProjectClick} />;
    }
  };

  const getActiveMenu = () => {
    switch (activeView) {
      case 'search':
        return 'search';
      case 'myprojects':
      case 'create':
        return 'projects';
      case 'profile':
        return 'profile';
      case 'settings':
        return 'profile';
      default:
        return 'home';
    }
  };

  // Show authentication screens if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Toaster />
        {authView === 'login' ? (
          <Login
            onRegisterClick={() => setAuthView('register')}
            onLoginSuccess={handleLoginSuccess}
          />
        ) : (
          <Register
            onLoginClick={() => setAuthView('login')}
            onRegisterSuccess={handleLoginSuccess}
          />
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster />
      <Header 
        userAvatar="https://images.unsplash.com/photo-1600178572204-6ac8886aae63?w=100" 
        onCreateProject={handleCreateProject}
        onSettingsClick={handleSettingsClick}
        onProfileClick={handleProfileClick}
      />
      <div className="flex">
        <Sidebar activeMenu={getActiveMenu()} onMenuClick={handleMenuClick} />
        <main className="flex-1">
          {renderActiveView()}
        </main>
      </div>
    </div>
  );
}
