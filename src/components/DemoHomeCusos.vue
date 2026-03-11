<template>
  <div class="course-landing" ref="landing">
    <!-- Header Flutuante -->
    <header class="header" :class="{ scrolled: isScrolled }">
      <div class="container header-inner">
        <div class="logo" @click="smoothScroll('#hero')">
          <div class="logo-icon">
            <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="20" fill="#2563EB" />
              <path d="M28 15L17 26L12 21" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <span class="logo-text">DOMINE<span class="gold">PRO</span></span>
        </div>

        <nav class="nav" :class="{ active: mobileMenuOpen }">
          <a href="#about" class="nav-link" @click="closeMobileMenu">O Curso</a>
          <a href="#results" class="nav-link" @click="closeMobileMenu">Resultados</a>
          <a href="#modules" class="nav-link" @click="closeMobileMenu">Módulos</a>
          <a href="#testimonials" class="nav-link" @click="closeMobileMenu">Depoimentos</a>
          <a href="#faq" class="nav-link" @click="closeMobileMenu">FAQ</a>
          <button class="nav-cta pulse-btn" @click="openCheckout">QUERO ME INSCREVER</button>
        </nav>

        <button class="mobile-menu-btn" @click="toggleMobileMenu" :aria-label="mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'">
          <span class="hamburger" :class="{ open: mobileMenuOpen }">
            <span></span><span></span><span></span>
          </span>
        </button>
      </div>
    </header>

    <!-- Hero Section -->
    <section id="hero" class="hero">
      <div class="hero-bg">
        <div class="hero-gradient"></div>
        <div class="hero-particles">
          <div class="particle" v-for="n in 20" :key="n" :style="particleStyle(n)"></div>
        </div>
      </div>

      <div class="container hero-grid">
        <div class="hero-content">
          <div class="badge reveal" data-delay="0">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 0L10.122 5.028L15.609 5.528L11.804 9.111L13.053 14.472L8 11.8L2.947 14.472L4.196 9.111L0.392 5.528L5.878 5.028L8 0Z" fill="#F59E0B"/>
            </svg>
            <span>LANÇAMENTO EXCLUSIVO</span>
          </div>

          <h1 class="hero-title reveal" data-delay="100">
            DOMINE <span class="gradient-text">MARKETING DIGITAL</span> COM O
            MÉTODO <span class="gold">#1 DO BRASIL</span>
          </h1>

          <p class="hero-subtitle reveal" data-delay="200">
            Aprenda as estratégias que já transformaram
            <strong>+5.000 alunos</strong> e gere resultados reais em semanas,
            mesmo que você esteja começando do zero.
          </p>

          <!-- Contador Regressivo -->
          <div class="countdown reveal" data-delay="300">
            <p class="countdown-label">OFERTA TERMINA EM:</p>
            <div class="countdown-timer">
              <div class="countdown-item">
                <span class="countdown-value">{{ days }}</span>
                <small>Dias</small>
              </div>
              <div class="countdown-separator">:</div>
              <div class="countdown-item">
                <span class="countdown-value">{{ hours }}</span>
                <small>Horas</small>
              </div>
              <div class="countdown-separator">:</div>
              <div class="countdown-item">
                <span class="countdown-value">{{ minutes }}</span>
                <small>Min</small>
              </div>
              <div class="countdown-separator">:</div>
              <div class="countdown-item">
                <span class="countdown-value">{{ seconds }}</span>
                <small>Seg</small>
              </div>
            </div>
          </div>

          <!-- CTA Principal -->
          <div class="cta-card reveal" data-delay="400">
            <div class="price-tag">
              <span class="original-price">DE R$ 1.497,00</span>
              <span class="current-price">POR APENAS 12x R$ 97,00</span>
              <span class="payment-option">ou R$ 997,00 à vista</span>
            </div>

            <button class="submit-btn glow-btn" @click="openCheckout">
              <span>GARANTIR MINHA VAGA AGORA</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10H16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <path d="M10 4L16 10L10 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>

            <div class="benefits-grid">
              <div class="benefit-item" v-for="benefit in heroBenefits" :key="benefit">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="10" fill="#10B981"/>
                  <path d="M6 10L9 13L14 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>{{ benefit }}</span>
              </div>
            </div>

            <div class="security-badges">
              <div class="sec-badge" v-for="badge in securityBadges" :key="badge.label">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>{{ badge.label }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="hero-visual reveal" data-delay="300">
          <div class="hero-photo-main">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=600&fit=crop&crop=face" alt="Instrutor Lucas Mendes" class="hero-instructor-photo" />
            <div class="hero-instructor-info">
              <strong>Lucas Mendes</strong>
              <span>Especialista em Marketing Digital</span>
            </div>
          </div>

          <div class="hero-students-strip">
            <div class="students-avatars">
              <img v-for="(img, idx) in studentPhotos" :key="idx" :src="img" :alt="'Aluno ' + (idx+1)" class="student-avatar" :style="{ zIndex: 5-idx }" />
            </div>
            <div class="students-text">
              <strong>+5.000 alunos</strong>
              <span>já transformaram suas carreiras</span>
            </div>
          </div>

          <div class="hero-stats-badge float-card-2">
            <div class="stat-mini">
              <div class="stat-mini-value">5K+</div>
              <div class="stat-mini-label">Alunos</div>
            </div>
            <div class="stat-mini">
              <div class="stat-mini-value">92%</div>
              <div class="stat-mini-label">Satisfação</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Parceiros -->
    <section class="partners-section">
      <div class="container">
        <p class="partners-label">Reconhecido pelas principais empresas do mercado</p>
        <div class="partners-slider">
          <div class="slider-track">
            <div class="partner-logo" v-for="(partner, idx) in [...partners, ...partners]" :key="idx">
              {{ partner }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sobre o Curso -->
    <section id="about" class="about-section">
      <div class="container">
        <div class="section-header reveal">
          <h2 class="section-title">O QUE É O DOMINEPRO?</h2>
          <p class="section-subtitle-text">O método mais completo para dominar o marketing digital do zero ao avançado</p>
        </div>

        <div class="about-grid">
          <div class="about-video reveal" data-delay="100">
            <div class="video-wrapper" @click="playVideo">
              <div class="video-thumb">
                <div class="video-thumb-overlay">
                  <div class="play-button">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                      <circle cx="30" cy="30" r="30" fill="#2563EB"/>
                      <path d="M25 20L40 30L25 40V20Z" fill="white"/>
                    </svg>
                  </div>
                </div>
                <div class="video-thumb-content">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                    <rect x="8" y="12" width="48" height="32" rx="4" fill="#1e3a8a" opacity="0.3"/>
                    <polygon points="28,22 40,28 28,34" fill="#2563EB"/>
                    <rect x="12" y="48" width="40" height="4" rx="2" fill="#cbd5e1"/>
                  </svg>
                  <p>Assista a apresentação do curso</p>
                </div>
              </div>
            </div>
          </div>

          <div class="about-text reveal" data-delay="200">
            <h3>Transforme sua carreira em <span class="gradient-text">apenas 8 semanas</span></h3>
            <p class="about-desc">
              O DominePro não é apenas mais um curso de marketing digital. É um método completo e
              testado que já ajudou mais de 5.000 alunos a construírem carreiras de sucesso ou
              alavancarem seus negócios.
            </p>

            <div class="about-features">
              <div class="feature-item" v-for="feature in aboutFeatures" :key="feature.title">
                <div class="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="#10B981"/>
                    <path d="M8 12L11 15L16 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div class="feature-text">
                  <h4>{{ feature.title }}</h4>
                  <p>{{ feature.desc }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Resultados -->
    <section id="results" class="results-section">
      <div class="container">
        <div class="section-header reveal">
          <h2 class="section-title light">RESULTADOS COMPROVADOS</h2>
          <p class="section-subtitle-text light">Veja o que nossos alunos estão conquistando</p>
        </div>

        <div class="results-grid">
          <div class="result-card reveal" v-for="(stat, idx) in stats" :key="idx" :data-delay="idx * 100">
            <div class="result-number">
              <span v-if="stat.prefix">{{ stat.prefix }}</span>
              <span class="counter" :data-target="stat.target" ref="counters">0</span>
              <span v-if="stat.suffix">{{ stat.suffix }}</span>
            </div>
            <div class="result-text">{{ stat.label }}</div>
          </div>
        </div>

        <div class="results-gallery">
          <div class="gallery-item reveal" v-for="(t, index) in visualTestimonials" :key="index" :data-delay="index * 100">
            <div class="gallery-img" :style="{ background: t.color }">
              <div class="avatar-placeholder">
                <svg width="60" height="60" viewBox="0 0 80 80" fill="none">
                  <circle cx="40" cy="30" r="14" fill="rgba(255,255,255,0.6)"/>
                  <ellipse cx="40" cy="58" rx="20" ry="12" fill="rgba(255,255,255,0.6)"/>
                </svg>
              </div>
            </div>
            <div class="gallery-overlay">
              <div class="overlay-content">
                <p>"{{ t.text }}"</p>
                <div class="testimonial-author-mini">
                  <strong>{{ t.name }}</strong>
                  <div class="rating">
                    <svg v-for="s in 5" :key="s" width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M8 0L10.122 5.028L15.609 5.528L11.804 9.111L13.053 14.472L8 11.8L2.947 14.472L4.196 9.111L0.392 5.528L5.878 5.028L8 0Z" fill="#F59E0B"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Módulos -->
    <section id="modules" class="modules-section">
      <div class="container">
        <div class="section-header reveal">
          <h2 class="section-title">O QUE VOCÊ VAI APRENDER</h2>
          <p class="section-subtitle-text">Um método passo a passo para dominar o marketing digital</p>
        </div>

        <div class="modules-tabs reveal" data-delay="100">
          <div class="tabs-header">
            <button v-for="(mod, index) in modules" :key="index"
              :class="{ active: activeTab === index }"
              @click="activeTab = index">
              <span class="tab-num">{{ index + 1 }}</span>
              {{ mod.shortTitle }}
            </button>
          </div>

          <div class="tabs-content">
            <transition name="tab-fade" mode="out-in">
              <div class="tab-pane" :key="activeTab">
                <div class="module-header">
                  <h3>{{ modules[activeTab].title }}</h3>
                  <p>{{ modules[activeTab].description }}</p>
                </div>

                <div class="module-lessons">
                  <div class="lesson-item" v-for="(lesson, i) in modules[activeTab].lessons" :key="i"
                    :style="{ transitionDelay: (i * 60) + 'ms' }">
                    <div class="lesson-icon">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" fill="#2563EB"/>
                        <path d="M8 12L11 15L16 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                    <div class="lesson-content">
                      <h4>{{ lesson }}</h4>
                      <p>{{ modules[activeTab].lessonDescriptions[i] }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </section>

    <!-- Depoimentos -->
    <section id="testimonials" class="testimonials-section">
      <div class="container">
        <div class="section-header reveal">
          <h2 class="section-title">DEPOIMENTOS REAIS</h2>
          <p class="section-subtitle-text">Veja o que nossos alunos estão dizendo</p>
        </div>

        <div class="testimonials-slider reveal" data-delay="100">
          <div class="slider-container" ref="sliderContainer">
            <div class="testimonial-card" v-for="(testimonial, index) in testimonials" :key="index">
              <div class="testimonial-video" @click="playTestimonialVideo(testimonial.videoId)">
                <div class="testimonial-thumb" :style="{ background: testimonial.bgColor }">
                  <div class="play-button small">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <circle cx="20" cy="20" r="20" fill="#2563EB"/>
                      <path d="M16 15L26 20L16 25V15Z" fill="white"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="testimonial-content">
                <div class="testimonial-text">
                  <p>"{{ testimonial.text }}"</p>
                </div>
                <div class="testimonial-author">
                  <div class="author-avatar" :style="{ background: testimonial.avatarColor }">
                    {{ testimonial.name.charAt(0) }}
                  </div>
                  <div class="author-info">
                    <strong>{{ testimonial.name }}</strong>
                    <span>{{ testimonial.role }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="slider-nav prev" @click="prevTestimonial" aria-label="Anterior">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <button class="slider-nav next" @click="nextTestimonial" aria-label="Próximo">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>

    <!-- Bônus -->
    <section class="bonus-section">
      <div class="container">
        <div class="section-header reveal">
          <h2 class="section-title">BÔNUS EXCLUSIVOS</h2>
          <p class="section-subtitle-text">Para quem se inscrever hoje</p>
        </div>

        <div class="bonus-grid">
          <div class="bonus-card reveal" v-for="(bonus, index) in bonuses" :key="index" :data-delay="index * 150">
            <div class="bonus-header-card">
              <div class="bonus-number">BÔNUS {{ index + 1 }}</div>
              <h3>{{ bonus.title }}</h3>
              <div class="bonus-value">Valor: R$ {{ bonus.value }},00</div>
            </div>
            <div class="bonus-body">
              <div class="bonus-img" :style="{ background: bonus.color }">
                <div class="bonus-img-icon">{{ bonus.emoji }}</div>
              </div>
              <p class="bonus-desc">{{ bonus.description }}</p>
              <ul class="bonus-list">
                <li v-for="(item, i) in bonus.items" :key="i">
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="10" fill="#2563EB"/>
                    <path d="M6 10L9 13L14 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Garantia -->
    <section class="guarantee-section">
      <div class="container">
        <div class="guarantee-card reveal">
          <div class="guarantee-icon">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <circle cx="30" cy="30" r="30" fill="#10B981"/>
              <path d="M42 22L26 38L18 30" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h2>GARANTIA INCONDICIONAL DE 7 DIAS</h2>
          <p>
            Se em até 7 dias você achar que o curso não é para você, devolvemos
            100% do seu dinheiro, sem burocracia.
          </p>
          <p class="guarantee-strong">Sem perguntas. Sem riscos.</p>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section id="faq" class="faq-section">
      <div class="container">
        <div class="section-header reveal">
          <h2 class="section-title">PERGUNTAS FREQUENTES</h2>
          <p class="section-subtitle-text">Tire suas dúvidas sobre o DominePro</p>
        </div>

        <div class="faq-accordion reveal" data-delay="100">
          <div class="faq-item" v-for="(faq, index) in faqs" :key="index"
            :class="{ active: faq.active }">
            <div class="faq-question" @click="toggleFaq(index)">
              <h3>{{ faq.question }}</h3>
              <div class="faq-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
            <div class="faq-answer">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="final-cta">
      <div class="container">
        <div class="cta-final-content reveal">
          <h2 class="section-title light">PRONTO PARA TRANSFORMAR SUA CARREIRA?</h2>
          <p class="section-subtitle-text light">Garanta sua vaga agora e comece hoje mesmo!</p>

          <div class="cta-card-final">
            <div class="price-tag">
              <span class="original-price">DE R$ 1.497,00</span>
              <span class="current-price">POR APENAS 12x R$ 97,00</span>
              <span class="payment-option">ou R$ 997,00 à vista</span>
            </div>

            <button class="submit-btn glow-btn" @click="openCheckout">
              <span>QUERO ME INSCREVER AGORA</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10H16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <path d="M10 4L16 10L10 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>

            <div class="payment-info">
              <div class="payment-icons">
                <svg v-for="n in 4" :key="n" width="36" height="24" viewBox="0 0 36 24" fill="none">
                  <rect width="36" height="24" rx="4" fill="#e2e8f0"/>
                  <rect x="4" y="8" :width="12 + n * 3" height="3" rx="1.5" fill="#94a3b8"/>
                  <rect x="4" y="13" width="10" height="3" rx="1.5" fill="#cbd5e1"/>
                </svg>
              </div>
              <p>Parcele em até 12x no cartão ou pague à vista com desconto</p>
            </div>

            <div class="guarantee-mini">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="#10B981"/>
                <path d="M8 12L11 15L16 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>7 dias de garantia incondicional</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-main">
          <div class="footer-brand">
            <div class="logo">
              <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="20" fill="#2563EB"/>
                <path d="M28 15L17 26L12 21" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="logo-text">DOMINE<span class="gold">PRO</span></span>
            </div>
            <p class="footer-desc">O curso mais completo de marketing digital do Brasil.</p>
            <div class="social-links">
              <a href="#" v-for="social in socials" :key="social.name" :aria-label="social.name">
                <span v-html="social.icon"></span>
              </a>
            </div>
          </div>

          <div class="footer-links">
            <h4>Links Rápidos</h4>
            <ul>
              <li><a href="#about" @click.prevent="smoothScroll('#about')">Sobre o Curso</a></li>
              <li><a href="#modules" @click.prevent="smoothScroll('#modules')">Módulos</a></li>
              <li><a href="#results" @click.prevent="smoothScroll('#results')">Resultados</a></li>
              <li><a href="#testimonials" @click.prevent="smoothScroll('#testimonials')">Depoimentos</a></li>
              <li><a href="#faq" @click.prevent="smoothScroll('#faq')">FAQ</a></li>
            </ul>
          </div>

          <div class="footer-contact">
            <h4>Contato</h4>
            <ul>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M22 6l-10 7L2 6" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                contato@dominepro.com
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                (11) 98765-4321
              </li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; 2026 DominePro. Todos os direitos reservados.</p>
          <div class="footer-legal">
            <a href="#">Termos de Uso</a>
            <a href="#">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>

    <!-- Modal de Vídeo -->
    <teleport to="body">
      <transition name="modal-fade">
        <div class="video-modal" v-if="videoModalOpen" @click.self="closeVideoModal">
          <div class="modal-content" @click.stop>
            <button class="modal-close" @click="closeVideoModal" aria-label="Fechar">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <div class="video-container">
              <iframe
                v-if="videoModalOpen"
                :src="'https://www.youtube.com/embed/' + currentVideoId + '?autoplay=1'"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script>
export default {
  name: "Homecursos",
  data() {
    return {
      isScrolled: false,
      mobileMenuOpen: false,
      videoModalOpen: false,
      currentVideoId: "",
      activeTab: 0,
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
      countdownDate: new Date().getTime() + 7 * 24 * 60 * 60 * 1000,
      countersAnimated: false,
      studentPhotos: [
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      ],
      heroBenefits: ["Acesso Vitalício", "Certificado Reconhecido", "Suporte Individual", "7 Dias de Garantia"],
      securityBadges: [
        { label: "Site Seguro" },
        { label: "Compra Protegida" },
        { label: "Dados Criptografados" },
      ],
      partners: ["GOOGLE", "META", "HUBSPOT", "RD STATION", "HOTMART"],
      aboutFeatures: [
        { title: "Aulas 100% Práticas", desc: "Nada de teoria sem aplicação. Você vai aprender fazendo." },
        { title: "Comunidade Exclusiva", desc: "Grupo fechado com alunos e mentores para networking." },
        { title: "Atualizações Constantes", desc: "Conteúdo sempre atualizado com as últimas tendências." },
      ],
      stats: [
        { target: 5000, suffix: "+", label: "Alunos Transformados" },
        { prefix: "R$", target: 15000, suffix: "+", label: "Média de Faturamento" },
        { target: 92, suffix: "%", label: "Taxa de Satisfação" },
        { target: 300, suffix: "+", label: "Casos de Sucesso" },
      ],
      modules: [
        {
          title: "Módulo 1: Fundamentos do Marketing Digital",
          shortTitle: "Fundamentos",
          description: "Domine os conceitos essenciais para construir uma base sólida em marketing digital.",
          lessons: ["Introdução ao Marketing Digital", "Criando Seu Funil de Vendas", "Definindo Seu Público-Alvo", "Personas e Jornada do Consumidor", "Métricas e KPIs Essenciais"],
          lessonDescriptions: ["Entenda os pilares do marketing digital e como aplicá-los", "Aprenda a criar funis de conversão eficientes", "Defina seu público com precisão para campanhas certeiras", "Crie personas detalhadas e mapeie a jornada do cliente", "Domine as métricas que realmente importam para seu negócio"],
        },
        {
          title: "Módulo 2: Tráfego Pago que Converte",
          shortTitle: "Tráfego Pago",
          description: "Aprenda estratégias avançadas de tráfego pago para gerar leads e vendas.",
          lessons: ["Configurando Sua Primeira Campanha", "Otimização de Anúncios", "Retargeting Avançado", "Google Ads e Meta Ads", "Analytics e ROI"],
          lessonDescriptions: ["Passo a passo para criar campanhas vencedoras", "Técnicas para melhorar o CTR e reduzir o CPL", "Estratégias de retargeting para conversões", "Diferenças e vantagens de cada plataforma", "Como medir e melhorar seu retorno sobre investimento"],
        },
        {
          title: "Módulo 3: Conversão e Vendas",
          shortTitle: "Conversão",
          description: "Técnicas comprovadas para aumentar conversões e fechar mais vendas.",
          lessons: ["Copywriting que Vende", "Páginas de Vendas de Alta Conversão", "Sequência de E-mails Automatizada", "Gatilhos Mentais Aplicados", "Upsell e Cross-sell"],
          lessonDescriptions: ["Escreva textos persuasivos que convertem", "Elementos essenciais de uma landing page vencedora", "Automatize seu processo de vendas com e-mails", "Aplicação prática de psicologia em vendas", "Técnicas para aumentar o ticket médio"],
        },
      ],
      faqs: [
        { question: "Por quanto tempo terei acesso ao curso?", answer: "Você terá acesso vitalício a todo o conteúdo do curso, incluindo todas as atualizações futuras que fizermos. Isso significa que você pode aprender no seu próprio ritmo e revisar o material sempre que precisar.", active: false },
        { question: "Existe algum requisito para fazer o curso?", answer: "Não, o curso foi desenvolvido para ser acessível tanto para iniciantes quanto para quem já tem experiência. Tudo é explicado de forma clara e prática, desde os conceitos mais básicos até as estratégias mais avançadas.", active: false },
        { question: "Como funciona a garantia de 7 dias?", answer: "Se dentro de 7 dias após a compra você achar que o curso não atendeu suas expectativas, basta nos enviar um e-mail que devolvemos 100% do seu dinheiro, sem questionamentos. Queremos apenas alunos satisfeitos.", active: false },
        { question: "Quanto tempo leva para ver resultados?", answer: "Isso varia conforme seu nível de dedicação. Alguns alunos veem resultados em poucas semanas, enquanto outros levam alguns meses para consolidar o conhecimento. O importante é seguir o método e aplicar o que é ensinado.", active: false },
        { question: "Há suporte para tirar dúvidas?", answer: "Sim! Além das aulas, você terá acesso a um grupo exclusivo no Telegram onde pode tirar dúvidas diretamente com nossa equipe e outros alunos. Também realizamos lives mensais para responder perguntas.", active: false },
      ],
      testimonials: [
        { name: "Ana Santos", role: "Empreendedora Digital", text: "Depois do curso, consegui meu primeiro cliente pagando R$ 5.000/mês. Valeu cada centavo!", videoId: "dQw4w9WgXcQ", bgColor: "linear-gradient(135deg, #667eea, #764ba2)", avatarColor: "#667eea" },
        { name: "Carlos Oliveira", role: "Consultor de Marketing", text: "Tripliquei minha renda em 3 meses aplicando o que aprendi. O suporte é incrível!", videoId: "dQw4w9WgXcQ", bgColor: "linear-gradient(135deg, #f093fb, #f5576c)", avatarColor: "#f5576c" },
        { name: "Mariana Costa", role: "Gestora de Tráfego", text: "Consegui meu primeiro emprego na área com um salário 3x maior que meu antigo trabalho!", videoId: "dQw4w9WgXcQ", bgColor: "linear-gradient(135deg, #4facfe, #00f2fe)", avatarColor: "#4facfe" },
      ],
      visualTestimonials: [
        { name: "João Silva", text: "Aumentei as vendas do meu e-commerce em 300%!", color: "linear-gradient(135deg, #a18cd1, #fbc2eb)" },
        { name: "Fernanda Lima", text: "Finalmente consigo monetizar meu Instagram!", color: "linear-gradient(135deg, #ffecd2, #fcb69f)" },
        { name: "Ricardo Almeida", text: "Em 6 meses recuperei o investimento 10 vezes!", color: "linear-gradient(135deg, #a1c4fd, #c2e9fb)" },
        { name: "Patrícia Souza", text: "O módulo de copywriting sozinho já valeu!", color: "linear-gradient(135deg, #d4fc79, #96e6a1)" },
      ],
      bonuses: [
        { title: "E-book: Fórmula de Lançamentos", description: "Um guia passo a passo para criar lançamentos que vendem.", value: "297", emoji: "📘", color: "linear-gradient(135deg, #667eea, #764ba2)", items: ["Estrutura de lançamento comprovada", "Scripts para webinars", "Modelos de e-mails de vendas", "Checklist de pré-lançamento"] },
        { title: "Workshop Ao Vivo", description: "Acesso a um workshop exclusivo sobre tráfego pago.", value: "497", emoji: "🎥", color: "linear-gradient(135deg, #f093fb, #f5576c)", items: ["2 horas de conteúdo exclusivo", "Análise de campanhas reais", "Plantão de dúvidas", "Material complementar"] },
        { title: "Templates Prontos", description: "Modelos de anúncios, e-mails e páginas de vendas.", value: "197", emoji: "📋", color: "linear-gradient(135deg, #4facfe, #00f2fe)", items: ["10 modelos de anúncios", "5 sequências de e-mails", "3 landing pages", "Scripts para vídeos de vendas"] },
        { title: "Mentoria Coletiva Mensal", description: "Encontros mensais para feedback dos especialistas.", value: "397", emoji: "🎯", color: "linear-gradient(135deg, #43e97b, #38f9d7)", items: ["1 encontro por mês", "Duração de 2 horas", "Análise de cases reais", "Networking com outros alunos"] },
      ],
      socials: [
        { name: "Facebook", icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' },
        { name: "Instagram", icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/></svg>' },
        { name: "YouTube", icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><polygon points="9.75,15.02 15.5,11.75 9.75,8.48" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' },
      ],
    };
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false;
    },
    toggleFaq(index) {
      this.faqs[index].active = !this.faqs[index].active;
    },
    playVideo() {
      this.currentVideoId = "dQw4w9WgXcQ";
      this.videoModalOpen = true;
      document.body.style.overflow = "hidden";
    },
    playTestimonialVideo(videoId) {
      this.currentVideoId = videoId;
      this.videoModalOpen = true;
      document.body.style.overflow = "hidden";
    },
    closeVideoModal() {
      this.videoModalOpen = false;
      this.currentVideoId = "";
      document.body.style.overflow = "";
    },
    openCheckout() {
      window.open("https://pagseguro.uol.com.br/checkout", "_blank", "noopener,noreferrer");
    },
    smoothScroll(target) {
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        this.closeMobileMenu();
      }
    },
    prevTestimonial() {
      const container = this.$refs.sliderContainer;
      if (container) container.scrollBy({ left: -350, behavior: "smooth" });
    },
    nextTestimonial() {
      const container = this.$refs.sliderContainer;
      if (container) container.scrollBy({ left: 350, behavior: "smooth" });
    },
    updateCountdown() {
      const now = new Date().getTime();
      const distance = this.countdownDate - now;
      if (distance < 0) {
        clearInterval(this.countdownTimer);
        this.days = this.hours = this.minutes = this.seconds = "00";
        return;
      }
      this.days = String(Math.floor(distance / 86400000)).padStart(2, "0");
      this.hours = String(Math.floor((distance % 86400000) / 3600000)).padStart(2, "0");
      this.minutes = String(Math.floor((distance % 3600000) / 60000)).padStart(2, "0");
      this.seconds = String(Math.floor((distance % 60000) / 1000)).padStart(2, "0");
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    },
    animateCounters() {
      if (this.countersAnimated) return;
      this.countersAnimated = true;
      const counters = this.$refs.landing?.querySelectorAll(".counter");
      if (!counters) return;
      counters.forEach((counter) => {
        const target = +counter.getAttribute("data-target");
        const duration = 2000;
        const startTime = performance.now();
        const step = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          counter.textContent = Math.floor(eased * target).toLocaleString("pt-BR");
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      });
    },
    particleStyle(n) {
      const size = 4 + Math.random() * 8;
      return {
        width: size + "px",
        height: size + "px",
        left: (n * 5 + Math.random() * 3) + "%",
        top: (Math.random() * 100) + "%",
        animationDelay: (Math.random() * 5) + "s",
        animationDuration: (3 + Math.random() * 4) + "s",
      };
    },
    setupRevealObserver() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const delay = entry.target.dataset.delay || 0;
              setTimeout(() => {
                entry.target.classList.add("revealed");
              }, +delay);
              if (entry.target.closest(".results-section")) {
                this.animateCounters();
              }
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
      );
      this.$refs.landing?.querySelectorAll(".reveal").forEach((el) => {
        observer.observe(el);
      });
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, { passive: true });
    this.updateCountdown();
    this.countdownTimer = setInterval(this.updateCountdown, 1000);
    this.$nextTick(() => {
      this.setupRevealObserver();
    });
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    clearInterval(this.countdownTimer);
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

:root {
  --primary: #2563eb;
  --primary-dark: #1d4ed8;
  --primary-light: #3b82f6;
  --secondary: #10b981;
  --accent: #f59e0b;
  --dark: #0f172a;
  --dark-2: #1e293b;
  --gray: #64748b;
  --gray-light: #94a3b8;
  --light: #f1f5f9;
  --lighter: #f8fafc;
  --white: #ffffff;
  --dark-blue: #1e3a8a;
  --radius: 16px;
  --shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1);
}

* { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  color: var(--dark);
  line-height: 1.6;
  overflow-x: hidden;
  background-color: var(--lighter);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<style scoped>
.container { width: 100%; max-width: 1200px; margin: 0 auto; padding: 0 24px; }

/* Reveal */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}
.reveal.revealed { opacity: 1; transform: translateY(0); }

/* Header */
.header {
  position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
  padding: 16px 0; transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1); background: rgba(255,255,255,0.8);
  backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
}
.header.scrolled {
  padding: 10px 0; background: rgba(255,255,255,0.95);
  backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
}
.header-inner { display: flex; justify-content: space-between; align-items: center; }

.logo { display: flex; align-items: center; gap: 10px; cursor: pointer; transition: transform 0.3s ease; text-decoration: none; }
.logo:hover { transform: scale(1.03); }
.logo:hover .logo-icon svg { transform: rotate(10deg); }
.logo-icon svg { transition: transform 0.4s ease; }
.logo-text { font-weight: 800; font-size: 1.4rem; color: var(--dark); letter-spacing: -0.02em; }
.gold { color: var(--accent); }

.nav { display: flex; align-items: center; gap: 28px; }
.nav-link { color: var(--dark-2); text-decoration: none; font-weight: 500; font-size: 0.95rem; position: relative; transition: color 0.3s ease; padding: 4px 0; }
.nav-link:hover { color: var(--primary); }
.nav-link::after { content: ""; position: absolute; bottom: -2px; left: 0; width: 0; height: 2px; background: var(--primary); transition: width 0.3s ease; border-radius: 1px; }
.nav-link:hover::after { width: 100%; }

.pulse-btn {
  background: var(--primary); color: white; border: none; padding: 10px 22px;
  border-radius: 50px; font-weight: 600; font-size: 0.85rem; cursor: pointer;
  transition: all 0.3s ease; box-shadow: 0 4px 14px rgba(37,99,235,0.3);
  letter-spacing: 0.02em; animation: pulseGlow 2.5s infinite;
}
.pulse-btn:hover { background: var(--primary-dark); transform: translateY(-2px); box-shadow: 0 6px 20px rgba(37,99,235,0.4); }

@keyframes pulseGlow {
  0%, 100% { box-shadow: 0 4px 14px rgba(37,99,235,0.3); }
  50% { box-shadow: 0 4px 28px rgba(37,99,235,0.5); }
}

.mobile-menu-btn { display: none; background: none; border: none; cursor: pointer; padding: 8px; }
.hamburger { display: flex; flex-direction: column; gap: 5px; width: 24px; }
.hamburger span { display: block; height: 2px; background: var(--dark); border-radius: 2px; transition: all 0.3s ease; }
.hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* Hero */
.hero { position: relative; padding: 140px 0 100px; overflow: hidden; min-height: 100vh; display: flex; align-items: center; }
.hero-bg { position: absolute; inset: 0; z-index: 0; background: var(--white); }
.hero-gradient {
  position: absolute; inset: 0;
  background: radial-gradient(ellipse at 20% 50%, rgba(37,99,235,0.06) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 20%, rgba(16,185,129,0.05) 0%, transparent 50%),
              radial-gradient(ellipse at 60% 80%, rgba(245,158,11,0.04) 0%, transparent 50%);
}
.hero-particles { position: absolute; inset: 0; overflow: hidden; }
.particle { position: absolute; background: rgba(37,99,235,0.08); border-radius: 50%; animation: particleFloat linear infinite; }
@keyframes particleFloat {
  0% { transform: translateY(0) scale(1); opacity: 0; }
  10% { opacity: 1; } 90% { opacity: 1; }
  100% { transform: translateY(-120px) scale(0); opacity: 0; }
}

.hero-grid { position: relative; z-index: 1; display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
.hero-content { color: var(--dark); }

.badge {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(37,99,235,0.08); border: 1px solid rgba(37,99,235,0.15);
  color: var(--primary); padding: 8px 18px; border-radius: 50px;
  font-size: 0.8rem; font-weight: 700; margin-bottom: 24px; letter-spacing: 0.05em;
}

.hero-title { font-size: clamp(2rem, 4vw, 3.2rem); line-height: 1.15; margin-bottom: 20px; color: var(--dark); font-weight: 900; letter-spacing: -0.02em; }
.gradient-text { background: linear-gradient(90deg, var(--primary), var(--secondary)); -webkit-background-clip: text; background-clip: text; color: transparent; }
.hero-subtitle { font-size: 1.15rem; color: var(--gray); margin-bottom: 32px; line-height: 1.7; }
.hero-subtitle strong { color: var(--primary); }

.countdown { margin-bottom: 32px; }
.countdown-label { font-size: 0.75rem; color: var(--gray-light); margin-bottom: 12px; text-transform: uppercase; letter-spacing: 2px; font-weight: 600; }
.countdown-timer { display: flex; gap: 8px; align-items: center; }
.countdown-item { background: var(--lighter); border: 1px solid #e2e8f0; padding: 12px 16px; border-radius: 12px; text-align: center; min-width: 70px; }
.countdown-value { font-size: 1.8rem; font-weight: 800; color: var(--dark); display: block; line-height: 1; }
.countdown-item small { font-size: 0.7rem; color: var(--gray-light); text-transform: uppercase; letter-spacing: 1px; margin-top: 4px; display: block; }
.countdown-separator { color: var(--gray-light); font-size: 1.5rem; font-weight: 700; }

/* CTA Card */
.cta-card { background: var(--lighter); border: 1px solid #e2e8f0; border-radius: var(--radius); padding: 28px; box-shadow: var(--shadow-lg); }
.price-tag { margin-bottom: 20px; }
.original-price { display: block; text-decoration: line-through; color: var(--gray-light); font-size: 0.9rem; }
.current-price { display: block; font-size: 1.6rem; font-weight: 800; color: var(--primary); margin: 6px 0; }
.payment-option { display: block; font-size: 0.9rem; color: var(--gray); }

.submit-btn, .glow-btn {
  display: flex; align-items: center; justify-content: center; gap: 10px; width: 100%;
  background: linear-gradient(135deg, var(--secondary), #059669); color: white; border: none;
  padding: 18px; border-radius: 14px; font-size: 1.05rem; font-weight: 700; cursor: pointer;
  transition: all 0.3s ease; margin-bottom: 20px; letter-spacing: 0.02em; position: relative; overflow: hidden;
}
.glow-btn::before { content: ""; position: absolute; inset: 0; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent); transform: translateX(-100%); animation: btnShine 3s infinite; }
@keyframes btnShine { 0% { transform: translateX(-100%); } 60%, 100% { transform: translateX(100%); } }
.glow-btn:hover { transform: translateY(-3px); box-shadow: 0 12px 30px rgba(16,185,129,0.4); }
.glow-btn:hover svg { transform: translateX(4px); }
.glow-btn svg { transition: transform 0.3s ease; }

.benefits-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 20px; }
.benefit-item { display: flex; align-items: center; gap: 8px; font-size: 0.85rem; color: var(--gray); }
.benefit-item svg { flex-shrink: 0; }

.security-badges { display: flex; justify-content: center; gap: 20px; padding-top: 16px; border-top: 1px solid #e2e8f0; }
.sec-badge { display: flex; align-items: center; gap: 6px; font-size: 0.75rem; color: var(--gray-light); font-weight: 500; }

/* Hero Visual */
.hero-visual { position: relative; min-height: 480px; display: flex; flex-direction: column; align-items: center; justify-content: center; }
.hero-photo-main { position: relative; width: 100%; max-width: 420px; }
.hero-instructor-photo { width: 100%; height: 480px; object-fit: cover; border-radius: 24px; box-shadow: var(--shadow-xl); display: block; }
.hero-instructor-info { position: absolute; bottom: 20px; left: 20px; right: 20px; background: rgba(255,255,255,0.92); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border-radius: 14px; padding: 16px 20px; box-shadow: var(--shadow-lg); }
.hero-instructor-info strong { display: block; font-size: 1.05rem; color: var(--dark); }
.hero-instructor-info span { font-size: 0.8rem; color: var(--gray); }

.hero-students-strip { display: flex; align-items: center; gap: 14px; margin-top: 20px; padding: 14px 20px; background: white; border-radius: 16px; box-shadow: var(--shadow); width: max-content; }
.students-avatars { display: flex; }
.student-avatar { width: 40px; height: 40px; border-radius: 50%; object-fit: cover; border: 3px solid white; margin-left: -10px; box-shadow: 0 2px 6px rgba(0,0,0,0.1); }
.student-avatar:first-child { margin-left: 0; }
.students-text strong { display: block; font-size: 0.9rem; color: var(--dark); }
.students-text span { font-size: 0.75rem; color: var(--gray); }

.hero-stats-badge { position: absolute; top: 30px; right: -10px; display: flex; gap: 12px; }
.stat-mini { background: white; border-radius: 12px; padding: 16px 20px; text-align: center; box-shadow: var(--shadow-lg); border: 1px solid #f1f5f9; }
.stat-mini-value { font-size: 1.4rem; font-weight: 800; color: var(--primary); }
.stat-mini-label { font-size: 0.7rem; color: var(--gray); text-transform: uppercase; letter-spacing: 0.5px; margin-top: 2px; }

.float-card { animation: float1 6s ease-in-out infinite; }
.float-card-2 { animation: float2 5s ease-in-out infinite; }
.float-card-3 { animation: float3 7s ease-in-out infinite; }
@keyframes float1 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
@keyframes float2 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
@keyframes float3 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }

/* Partners */
.partners-section { padding: 40px 0; background: white; border-bottom: 1px solid #f1f5f9; }
.partners-label { text-align: center; color: var(--gray); margin-bottom: 24px; font-size: 0.9rem; font-weight: 500; }
.partners-slider { overflow: hidden; mask-image: linear-gradient(90deg, transparent, black 10%, black 90%, transparent); -webkit-mask-image: linear-gradient(90deg, transparent, black 10%, black 90%, transparent); }
.slider-track { display: flex; gap: 48px; animation: marquee 25s linear infinite; width: max-content; }
.partner-logo { font-size: 1.1rem; font-weight: 800; color: var(--gray-light); letter-spacing: 0.1em; white-space: nowrap; padding: 8px 16px; transition: color 0.3s; }
.partner-logo:hover { color: var(--primary); }
@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

/* About */
.about-section { padding: 100px 0; background: white; }
.section-header { text-align: center; margin-bottom: 60px; }
.section-title { font-size: clamp(1.5rem, 3vw, 2.4rem); color: var(--dark); margin-bottom: 16px; font-weight: 800; letter-spacing: -0.02em; position: relative; display: inline-block; }
.section-title::after { content: ""; position: absolute; bottom: -8px; left: 50%; transform: translateX(-50%); width: 60px; height: 4px; background: linear-gradient(90deg, var(--primary), var(--secondary)); border-radius: 2px; }
.section-title.light { color: white; }
.section-title.light::after { background: rgba(255,255,255,0.5); }
.section-subtitle-text { color: var(--gray); font-size: 1.1rem; margin-top: 8px; max-width: 600px; margin-left: auto; margin-right: auto; }
.section-subtitle-text.light { color: rgba(255,255,255,0.7); }

.about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
.video-wrapper { border-radius: var(--radius); overflow: hidden; box-shadow: var(--shadow-xl); cursor: pointer; transition: transform 0.4s ease; }
.video-wrapper:hover { transform: scale(1.02); }
.video-thumb { position: relative; background: linear-gradient(135deg, #1e3a8a, #2563eb); aspect-ratio: 16/9; display: flex; align-items: center; justify-content: center; }
.video-thumb-overlay { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; z-index: 2; }
.video-thumb-content { text-align: center; color: rgba(255,255,255,0.6); font-size: 0.9rem; }
.video-thumb-content p { margin-top: 12px; }
.play-button { transition: transform 0.3s ease; }
.video-wrapper:hover .play-button { transform: scale(1.15); }

.about-text h3 { font-size: 1.7rem; margin-bottom: 20px; color: var(--dark); font-weight: 800; line-height: 1.3; }
.about-desc { color: var(--gray); margin-bottom: 32px; line-height: 1.8; }
.feature-item { display: flex; gap: 16px; margin-bottom: 24px; }
.feature-icon { flex-shrink: 0; width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; background: rgba(16,185,129,0.1); border-radius: 12px; }
.feature-text h4 { font-size: 1.05rem; color: var(--dark); margin-bottom: 4px; font-weight: 700; }
.feature-text p { color: var(--gray); font-size: 0.9rem; line-height: 1.6; }

/* Results */
.results-section { background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%); padding: 100px 0; color: white; }
.results-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; margin-bottom: 60px; }
.result-card { background: rgba(255,255,255,0.06); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.08); border-radius: var(--radius); padding: 32px 24px; text-align: center; transition: all 0.4s ease; }
.result-card:hover { transform: translateY(-8px); background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.2); }
.result-number { font-size: 2.4rem; font-weight: 900; color: white; margin-bottom: 8px; }
.result-text { font-size: 0.9rem; color: rgba(255,255,255,0.6); font-weight: 500; }

.results-gallery { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
.gallery-item { position: relative; border-radius: var(--radius); overflow: hidden; aspect-ratio: 1; cursor: pointer; }
.gallery-img { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; transition: transform 0.5s ease; }
.gallery-item:hover .gallery-img { transform: scale(1.08); }
.avatar-placeholder { opacity: 0.8; }
.gallery-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 50%, transparent); display: flex; align-items: flex-end; opacity: 0; transition: opacity 0.4s ease; }
.gallery-item:hover .gallery-overlay { opacity: 1; }
.overlay-content { padding: 20px; transform: translateY(10px); transition: transform 0.4s ease; }
.gallery-item:hover .overlay-content { transform: translateY(0); }
.overlay-content p { font-size: 0.85rem; line-height: 1.5; margin-bottom: 12px; color: white; }
.testimonial-author-mini { display: flex; align-items: center; gap: 10px; }
.testimonial-author-mini strong { font-size: 0.85rem; color: white; }
.rating { display: flex; gap: 2px; }

/* Modules */
.modules-section { padding: 100px 0; background: var(--lighter); }
.modules-tabs { background: white; border-radius: var(--radius); overflow: hidden; box-shadow: var(--shadow-lg); }
.tabs-header { display: flex; border-bottom: 1px solid #f1f5f9; overflow-x: auto; }
.tabs-header button { flex: 1; padding: 18px 20px; background: none; border: none; font-size: 0.9rem; font-weight: 600; color: var(--gray); cursor: pointer; transition: all 0.3s ease; position: relative; display: flex; align-items: center; justify-content: center; gap: 8px; white-space: nowrap; min-width: max-content; }
.tab-num { width: 24px; height: 24px; border-radius: 50%; background: var(--light); display: inline-flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 700; transition: all 0.3s ease; }
.tabs-header button.active .tab-num { background: var(--primary); color: white; }
.tabs-header button::after { content: ""; position: absolute; bottom: 0; left: 0; width: 0; height: 3px; background: var(--primary); transition: width 0.3s ease; border-radius: 3px 3px 0 0; }
.tabs-header button.active { color: var(--primary); }
.tabs-header button.active::after { width: 100%; }
.tabs-content { padding: 32px; }

.tab-fade-enter-active, .tab-fade-leave-active { transition: opacity 0.25s ease, transform 0.25s ease; }
.tab-fade-enter-from { opacity: 0; transform: translateY(8px); }
.tab-fade-leave-to { opacity: 0; transform: translateY(-8px); }

.module-header { margin-bottom: 28px; }
.module-header h3 { font-size: 1.4rem; color: var(--dark); margin-bottom: 8px; font-weight: 700; }
.module-header p { color: var(--gray); line-height: 1.7; }
.module-lessons { display: flex; flex-direction: column; gap: 12px; }
.lesson-item { display: flex; gap: 16px; padding: 18px; border-radius: 12px; background: var(--lighter); transition: all 0.3s ease; border: 1px solid transparent; }
.lesson-item:hover { background: white; box-shadow: var(--shadow); border-color: #e2e8f0; transform: translateX(4px); }
.lesson-icon { flex-shrink: 0; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; background: rgba(37,99,235,0.08); border-radius: 10px; }
.lesson-content h4 { font-size: 1rem; color: var(--dark); margin-bottom: 4px; font-weight: 600; }
.lesson-content p { color: var(--gray); font-size: 0.85rem; line-height: 1.5; }

/* Testimonials */
.testimonials-section { padding: 100px 0; background: white; }
.testimonials-slider { position: relative; }
.slider-container { display: flex; gap: 24px; overflow-x: auto; scroll-snap-type: x mandatory; scroll-behavior: smooth; padding: 8px 4px; scrollbar-width: none; }
.slider-container::-webkit-scrollbar { display: none; }
.testimonial-card { flex: 0 0 calc(50% - 12px); scroll-snap-align: start; background: white; border-radius: var(--radius); overflow: hidden; box-shadow: var(--shadow-lg); border: 1px solid #f1f5f9; transition: transform 0.3s ease; }
.testimonial-card:hover { transform: translateY(-4px); }
.testimonial-video { position: relative; height: 200px; cursor: pointer; overflow: hidden; }
.testimonial-thumb { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; transition: transform 0.4s ease; }
.testimonial-video:hover .testimonial-thumb { transform: scale(1.05); }
.play-button.small svg { filter: drop-shadow(0 4px 8px rgba(0,0,0,0.2)); }
.testimonial-content { padding: 24px; }
.testimonial-text { margin-bottom: 20px; font-style: italic; color: var(--gray); line-height: 1.7; font-size: 0.95rem; }
.testimonial-author { display: flex; align-items: center; gap: 14px; }
.author-avatar { width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; font-size: 1.2rem; flex-shrink: 0; }
.author-info { display: flex; flex-direction: column; }
.author-info strong { color: var(--dark); font-size: 0.95rem; }
.author-info span { color: var(--gray-light); font-size: 0.8rem; }
.slider-nav { position: absolute; top: 50%; transform: translateY(-50%); width: 44px; height: 44px; border-radius: 50%; background: white; border: 1px solid #e2e8f0; box-shadow: var(--shadow); cursor: pointer; display: flex; align-items: center; justify-content: center; z-index: 2; transition: all 0.3s ease; color: var(--dark); }
.slider-nav:hover { background: var(--primary); color: white; border-color: var(--primary); box-shadow: 0 4px 12px rgba(37,99,235,0.3); }
.slider-nav.prev { left: -22px; }
.slider-nav.next { right: -22px; }

/* Bonus */
.bonus-section { padding: 100px 0; background: var(--lighter); }
.bonus-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
.bonus-card { background: white; border-radius: var(--radius); overflow: hidden; box-shadow: var(--shadow); transition: all 0.4s ease; border: 1px solid #f1f5f9; }
.bonus-card:hover { transform: translateY(-8px); box-shadow: var(--shadow-xl); }
.bonus-header-card { padding: 24px; background: linear-gradient(135deg, var(--primary), var(--dark-blue)); color: white; position: relative; }
.bonus-number { position: absolute; top: 16px; right: 16px; font-size: 0.7rem; font-weight: 700; opacity: 0.6; letter-spacing: 0.1em; }
.bonus-header-card h3 { font-size: 1.2rem; margin-bottom: 4px; font-weight: 700; }
.bonus-value { font-size: 0.85rem; opacity: 0.7; }
.bonus-body { padding: 24px; }
.bonus-img { width: 100%; height: 120px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px; }
.bonus-img-icon { font-size: 3rem; }
.bonus-desc { color: var(--gray); margin-bottom: 20px; line-height: 1.7; font-size: 0.9rem; }
.bonus-list { list-style: none; }
.bonus-list li { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; color: var(--dark-2); font-size: 0.9rem; }
.bonus-list li svg { flex-shrink: 0; }

/* Guarantee */
.guarantee-section { padding: 100px 0; background: linear-gradient(135deg, #ecfdf5, #d1fae5); }
.guarantee-card { max-width: 700px; margin: 0 auto; background: white; border-radius: var(--radius); padding: 60px 48px; text-align: center; box-shadow: var(--shadow-xl); position: relative; }
.guarantee-icon { position: absolute; top: -30px; left: 50%; transform: translateX(-50%); width: 60px; height: 60px; background: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: var(--shadow-lg); }
.guarantee-card h2 { font-size: 1.6rem; color: var(--dark); margin-bottom: 20px; margin-top: 10px; font-weight: 800; }
.guarantee-card p { color: var(--gray); line-height: 1.8; max-width: 500px; margin: 0 auto 12px; }
.guarantee-strong { font-weight: 700; color: var(--dark) !important; font-size: 1.1rem; }

/* FAQ */
.faq-section { padding: 100px 0; background: white; }
.faq-accordion { max-width: 720px; margin: 0 auto; }
.faq-item { margin-bottom: 12px; border-radius: 12px; overflow: hidden; background: var(--lighter); border: 1px solid #f1f5f9; transition: all 0.3s ease; }
.faq-item:hover { border-color: #e2e8f0; }
.faq-item.active { border-color: rgba(37,99,235,0.2); background: white; box-shadow: var(--shadow); }
.faq-question { padding: 20px 24px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; transition: background 0.3s ease; gap: 16px; }
.faq-question h3 { font-size: 1rem; color: var(--dark); font-weight: 600; }
.faq-arrow { flex-shrink: 0; width: 32px; height: 32px; border-radius: 50%; background: var(--light); display: flex; align-items: center; justify-content: center; transition: all 0.3s ease; color: var(--gray); }
.faq-item.active .faq-arrow { transform: rotate(180deg); background: var(--primary); color: white; }
.faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.4s cubic-bezier(0.22, 1, 0.36, 1); }
.faq-item.active .faq-answer { max-height: 300px; }
.faq-answer p { padding: 0 24px 20px; color: var(--gray); line-height: 1.8; font-size: 0.95rem; }

/* Final CTA */
.final-cta { background: linear-gradient(135deg, #0f172a, #1e3a8a); padding: 100px 0; text-align: center; position: relative; overflow: hidden; }
.final-cta::before { content: ""; position: absolute; inset: 0; background: radial-gradient(ellipse at center, rgba(37,99,235,0.2) 0%, transparent 70%); }
.cta-final-content { position: relative; z-index: 1; max-width: 600px; margin: 0 auto; }
.cta-card-final { background: white; border-radius: var(--radius); padding: 40px; margin-top: 40px; box-shadow: var(--shadow-xl); text-align: center; }
.cta-card-final .original-price { color: var(--gray-light); }
.cta-card-final .current-price { color: var(--primary); }
.cta-card-final .payment-option { color: var(--gray); }
.payment-info { margin-top: 20px; }
.payment-icons { display: flex; justify-content: center; gap: 8px; margin-bottom: 12px; }
.payment-info p { color: var(--gray); font-size: 0.85rem; }
.guarantee-mini { display: inline-flex; align-items: center; gap: 8px; margin-top: 20px; padding: 10px 20px; background: rgba(16,185,129,0.1); border-radius: 50px; color: var(--secondary); font-weight: 600; font-size: 0.85rem; }

/* Footer */
.footer { background: var(--dark); color: white; padding: 80px 0 0; }
.footer .logo-text { color: white; }
.footer-main { display: grid; grid-template-columns: 1.5fr 1fr 1fr; gap: 48px; margin-bottom: 48px; }
.footer-desc { color: rgba(255,255,255,0.6); line-height: 1.7; margin-top: 16px; margin-bottom: 20px; font-size: 0.9rem; }
.social-links { display: flex; gap: 12px; }
.social-links a { width: 40px; height: 40px; border-radius: 10px; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.7); transition: all 0.3s ease; text-decoration: none; }
.social-links a:hover { background: var(--primary); color: white; transform: translateY(-2px); }
.footer-links h4, .footer-contact h4 { font-size: 1rem; margin-bottom: 20px; color: white; font-weight: 700; }
.footer-links ul, .footer-contact ul { list-style: none; }
.footer-links li { margin-bottom: 12px; }
.footer-links a { color: rgba(255,255,255,0.6); text-decoration: none; transition: color 0.3s ease; font-size: 0.9rem; }
.footer-links a:hover { color: white; }
.footer-contact li { margin-bottom: 14px; display: flex; align-items: center; gap: 10px; color: rgba(255,255,255,0.6); font-size: 0.9rem; }
.footer-contact svg { flex-shrink: 0; }
.footer-bottom { border-top: 1px solid rgba(255,255,255,0.08); padding: 28px 0; display: flex; justify-content: space-between; align-items: center; }
.footer-bottom p { color: rgba(255,255,255,0.4); font-size: 0.85rem; }
.footer-legal { display: flex; gap: 24px; }
.footer-legal a { color: rgba(255,255,255,0.5); text-decoration: none; font-size: 0.85rem; transition: color 0.3s ease; }
.footer-legal a:hover { color: white; }

/* Video Modal */
.video-modal { position: fixed; inset: 0; z-index: 9999; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.85); backdrop-filter: blur(8px); }
.modal-fade-enter-active, .modal-fade-leave-active { transition: opacity 0.3s ease; }
.modal-fade-enter-active .modal-content, .modal-fade-leave-active .modal-content { transition: transform 0.3s ease; }
.modal-fade-enter-from, .modal-fade-leave-to { opacity: 0; }
.modal-fade-enter-from .modal-content { transform: scale(0.9); }
.modal-fade-leave-to .modal-content { transform: scale(0.9); }
.modal-content { position: relative; width: 90%; max-width: 900px; background: black; border-radius: var(--radius); overflow: hidden; }
.modal-close { position: absolute; top: -48px; right: 0; width: 40px; height: 40px; border-radius: 50%; background: rgba(255,255,255,0.1); border: none; color: white; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.3s ease; }
.modal-close:hover { background: rgba(255,255,255,0.2); }
.video-container { position: relative; padding-bottom: 56.25%; height: 0; }
.video-container iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }

/* Responsive */
@media (max-width: 1024px) {
  .hero-grid { grid-template-columns: 1fr; gap: 40px; }
  .hero-visual { display: none; }
  .hero-content { text-align: center; }
  .countdown-timer { justify-content: center; }
  .benefits-grid { max-width: 400px; margin-left: auto; margin-right: auto; }
  .security-badges { justify-content: center; }
  .about-grid { grid-template-columns: 1fr; gap: 40px; }
  .results-grid { grid-template-columns: repeat(2, 1fr); }
  .results-gallery { grid-template-columns: repeat(2, 1fr); }
  .bonus-grid { grid-template-columns: 1fr; }
  .footer-main { grid-template-columns: 1fr; gap: 32px; }
}

@media (max-width: 768px) {
  .nav { display: none; position: fixed; inset: 0; background: rgba(255,255,255,0.98); backdrop-filter: blur(20px); flex-direction: column; justify-content: center; align-items: center; gap: 24px; z-index: 999; }
  .nav.active { display: flex; }
  .nav-link { font-size: 1.2rem; color: var(--dark); }
  .mobile-menu-btn { display: block; z-index: 1001; }
  .hero { padding: 120px 0 80px; min-height: auto; }
  .hero-title { font-size: 1.8rem; }
  .results-grid { grid-template-columns: 1fr 1fr; }
  .results-gallery { grid-template-columns: 1fr 1fr; }
  .testimonial-card { flex: 0 0 85%; }
  .tabs-header { overflow-x: auto; }
  .slider-nav { display: none; }
}

@media (max-width: 480px) {
  .hero-title { font-size: 1.5rem; }
  .hero-subtitle { font-size: 0.95rem; }
  .countdown-item { min-width: 56px; padding: 10px 12px; }
  .countdown-value { font-size: 1.4rem; }
  .benefits-grid { grid-template-columns: 1fr; }
  .results-grid { grid-template-columns: 1fr; }
  .results-gallery { grid-template-columns: 1fr 1fr; }
  .guarantee-card { padding: 48px 24px; }
  .cta-card-final { padding: 28px 20px; }
  .footer-bottom { flex-direction: column; gap: 16px; text-align: center; }
  .footer-legal { flex-direction: column; gap: 8px; }
}
</style>