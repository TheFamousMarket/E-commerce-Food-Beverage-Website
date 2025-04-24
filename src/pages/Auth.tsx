import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
const Auth = () => {
  const {
    signInWithGoogle,
    signInWithFacebook,
    error
  } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      await signInWithGoogle();
      navigate('/');
    } catch (error) {
      console.error('Google sign in error:', error);
    } finally {
      setLoading(false);
    }
  };
  const handleFacebookSignIn = async () => {
    try {
      setLoading(true);
      await signInWithFacebook();
      navigate('/');
    } catch (error) {
      console.error('Facebook sign in error:', error);
    } finally {
      setLoading(false);
    }
  };
  return <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-100">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/25 z-10"></div>
        <div className="relative h-[30vh] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3')"
      }}>
          <div className="container mx-auto px-4 h-full flex items-center relative z-20">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                Sign In
              </h1>
              <p className="text-lg md:text-xl text-white">
                Join our community of food lovers
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Auth Content */}
      <section className="py-16 px-4">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Welcome to THEFMSMKT
            </h2>
            <p className="text-gray-600">
              Sign in to access your account and explore our delicious offerings
            </p>
          </div>
          {error && <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-600 rounded-md">
              {error}
            </div>}
          <div className="space-y-4">
            <button onClick={handleGoogleSignIn} disabled={loading} className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-md shadow-sm bg-white text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              {loading ? <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-700"></div> : <>
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
                  </svg>
                  Continue with Google
                </>}
            </button>
            <button onClick={handleFacebookSignIn} disabled={loading} className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-md shadow-sm bg-blue-600 text-white hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              {loading ? <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div> : <>
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                  Continue with Facebook
                </>}
            </button>
          </div>
          <p className="mt-8 text-center text-sm text-gray-500">
            By continuing, you agree to THEFMSMKT's Terms of Service and Privacy
            Policy.
          </p>
        </div>
      </section>
    </div>;
};
export default Auth;