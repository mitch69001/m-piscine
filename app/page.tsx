import Link from 'next/link'
import CitySearch from '@/components/CitySearch'
import PopularCities from '@/components/PopularCities'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-500 to-primary-600 text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                <span className="text-sm font-semibold">Plus de 35 000 villes référencées</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Trouvez votre pisciniste près de chez vous
              </h1>
              
              <p className="text-xl md:text-2xl text-primary-100 mb-8">
                Comparez les devis gratuits pour construction, entretien et rénovation de piscines. Piscinistes certifiés dans votre région.
              </p>
              
              {/* City Search */}
              <div className="mb-8">
                <CitySearch />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/pisciniste"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-primary-600 bg-white rounded-xl hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
                >
                  🔍 Trouver mon pisciniste
                </Link>
                <a
                  href="#comment-ca-marche"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-all border-2 border-white"
                >
                  ℹ️ Comment ça marche ?
                </a>
              </div>
            </div>

            {/* Right side - Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold mb-2">35 000+</div>
                <div className="text-primary-100">Villes référencées</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-primary-100">Professionnels certifiés</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold mb-2">Gratuit</div>
                <div className="text-primary-100">Comparaison et devis</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold mb-2">Rapide</div>
                <div className="text-primary-100">Réponse sous 48h</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="comment-ca-marche" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-xl text-gray-600">
              Décrivez votre projet piscine en quelques clics et recevez jusqu'à 5 devis personnalisés de piscinistes qualifiés de votre région. Comparez les offres, consultez les avis clients et choisissez le professionnel qui correspond à vos attentes et votre budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Recherchez votre ville</h3>
              <p className="text-gray-600">
                Entrez le nom de votre ville parmi les 35 000+ communes référencées en France.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">📋</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Comparez les pros</h3>
              <p className="text-gray-600">
                Consultez la liste des piscinistes certifiés près de chez vous avec leurs avis.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Recevez vos devis</h3>
              <p className="text-gray-600">
                Demandez jusqu'à 3 devis gratuits et sans engagement. Comparez et choisissez !
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi faire appel à un pisciniste ?
            </h2>
            <p className="text-xl text-gray-600">
              Les avantages de choisir un professionnel qualifié
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-primary-50 rounded-xl p-6 border-2 border-primary-100 hover:border-primary-300 transition-all">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Devis gratuits et sans engagement en 24h</h3>
              <p className="text-gray-600">Devis gratuits et sans engagement en 24h</p>
            </div>
            <div className="bg-primary-50 rounded-xl p-6 border-2 border-primary-100 hover:border-primary-300 transition-all">
              <div className="text-4xl mb-3">🌍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Piscinistes vérifiés et expérimentés près de chez vous</h3>
              <p className="text-gray-600">Piscinistes vérifiés et expérimentés près de chez vous</p>
            </div>
            <div className="bg-primary-50 rounded-xl p-6 border-2 border-primary-100 hover:border-primary-300 transition-all">
              <div className="text-4xl mb-3">🏠</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Accompagnement personnalisé de votre projet piscine</h3>
              <p className="text-gray-600">Accompagnement personnalisé de votre projet piscine</p>
            </div>
            <div className="bg-primary-50 rounded-xl p-6 border-2 border-primary-100 hover:border-primary-300 transition-all">
              <div className="text-4xl mb-3">🎁</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Économisez jusqu'à 30% en comparant les prix</h3>
              <p className="text-gray-600">Économisez jusqu'à 30% en comparant les prix</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Cities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pisciniste par ville
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez nos piscinistes certifiés dans les principales villes de France
            </p>
          </div>
          
          <PopularCities />
          
          <div className="text-center mt-8">
            <Link
              href="/pisciniste"
              className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-primary-600 rounded-xl hover:bg-primary-700 transition-colors"
            >
              Voir toutes les villes →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Questions fréquentes
            </h2>
            <p className="text-xl text-gray-600">
              Tout ce que vous devez savoir
            </p>
          </div>

          <div className="space-y-6">
                        <details className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-all cursor-pointer">
              <summary className="text-lg font-semibold text-gray-900 cursor-pointer">
                Combien coûte la construction d'une piscine ?
              </summary>
              <p className="mt-4 text-gray-600">
                Le prix d'une piscine varie selon le type : piscine hors-sol (500€ à 15 000€), piscine coque (15 000€ à 30 000€), piscine béton (20 000€ à 50 000€). Les dimensions, équipements et finitions influencent le coût final. Nos piscinistes établissent des devis personnalisés selon vos besoins.
              </p>
            </details>
            <details className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-all cursor-pointer">
              <summary className="text-lg font-semibold text-gray-900 cursor-pointer">
                Quand faut-il entretenir sa piscine ?
              </summary>
              <p className="mt-4 text-gray-600">
                L'entretien régulier est essentiel : nettoyage hebdomadaire, contrôle du pH et chlore, vidange partielle mensuelle. Un entretien professionnel saisonnier (ouverture/fermeture) garantit une eau saine et prolonge la durée de vie de votre piscine.
              </p>
            </details>
            <details className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-all cursor-pointer">
              <summary className="text-lg font-semibold text-gray-900 cursor-pointer">
                Faut-il un permis pour construire une piscine ?
              </summary>
              <p className="mt-4 text-gray-600">
                Pour une piscine de moins de 10m², aucune autorisation n'est requise. Entre 10m² et 100m², une déclaration préalable suffit. Au-delà de 100m² ou avec abri de plus de 1,80m, un permis de construire est obligatoire. Votre pisciniste vous accompagne dans ces démarches.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à trouver votre pisciniste ?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Trouvez dès maintenant les meilleurs piscinistes près de chez vous
          </p>
          <Link
            href="/pisciniste"
            className="inline-flex items-center px-8 py-4 text-lg font-bold text-primary-600 bg-white rounded-xl hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
          >
            🚀 Commencer ma recherche
          </Link>
        </div>
      </section>
    </main>
  )
}
