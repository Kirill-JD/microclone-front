<template>
	<div class="pa-5">
		<h1 class="pb-4">Настройка {{ getText() }} SDK</h1>
			<div v-if="project.platform == 'DJANGO'">
				<p>Интеграция с Django добавляет поддержку Django Web Framework начиная с версии 1.6 и выше.</p>
				<p class="pb-4">Установить sentry-sdk:</p>
				<v-card
					class="pa-3 px-6"
					elevation="5"
					rounded="lg"
					style="background-color: rgb(23, 41, 32); color: white;"
				>

				<code>
pip install --upgrade sentry-sdk
				</code>

		</v-card>
		<p class="pb-3 pt-5">Чтобы настроить SDK, инициализируйте его с интеграцией Django в вашем settings.pyфайле:</p>
		<v-card
			class="pa-3 px-6"
			elevation="5"
			rounded="lg"
			style="background-color: rgb(23, 41, 32); color: white;"
		>
			<pre>
				<code>
import sentry_sdk
from sentry_sdk.integrations.django import DjangoIntegration

sentry_sdk.init(
	dsn="http://{{ project.sentry_key }}@localhost:8000/{{ project.id }}",
	integrations=[
		DjangoIntegration(),
	],

	# Set traces_sample_rate to 1.0 to capture 100%
	# of transactions for performance monitoring.
	# We recommend adjusting this value in production.
	traces_sample_rate=1.0,

	# If you wish to associate users to errors (assuming you are using
	# django.contrib.auth) you may enable sending PII data.
	send_default_pii=True
)
					</code>
				</pre>
			</v-card>
			<p class="pt-5">Приведенная выше конфигурация фиксирует как данные об ошибках, так и данные о производительности. Чтобы уменьшить объем собираемых данных о производительности, измените traces_sample_rateзначение на значение от 0 до 1.</p>
			<p class="pb-3">Вы можете легко проверить свою установку Sentry, создав маршрут, который вызывает ошибку:</p>
			<v-card
				class="pa-3 px-6"
				elevation="5"
				rounded="lg"
				style="background-color: rgb(23, 41, 32); color: white;"
			>
				<pre>
					<code>
from django.urls import path

def trigger_error(request):
	division_by_zero = 1 / 0

urlpatterns = [
	path('sentry-debug/', trigger_error),
	# ...
]
					</code>
				</pre>
			</v-card>
			<p class="py-5">Посещение этого маршрута вызовет ошибку, которая будет зафиксирована.</p>
		</div>
		<div v-else-if="project.platform == 'SPRING'">
			<p class="pb-4">Для Spring Boot доступно два варианта Sentry. Если вы используете Spring Boot 2, используйте `sentry-spring-boot-starter` ([GitHub](https://github.com/getsentry/sentry-java/tree/master/sentry-spring-boot-starter) ). Если вы используете Spring Boot 3, вместо этого используйте `sentry-spring-boot-starter-jakarta` ([GitHub](https://github.com/getsentry/sentry-java/tree/master/sentry-spring-boot -стартер-джакарта)). Интеграция Sentry с Spring Boot поддерживает Spring Boot 2.1.0 и выше, чтобы сообщать о необработанных исключениях, а также выпускать и регистрировать bean-компоненты. Если вы используете более старую версию, используйте нашу устаревшую интеграцию.</p>
			<h2>Установка</h2>
			<p class="py-4">Установите с помощью Maven или Gradle:</p>
			<h2>Maven</h2>
			<h2 class="pb-3 pt-5">Spring Boot 2</h2>
			<v-card
				class="pa-3 px-6"
				elevation="5"
				rounded="lg"
				style="background-color: rgb(23, 41, 32); color: white;"
			>
				<pre lang="xml">
					<code>
{{ xmlSpring2 }}
					</code>
				</pre>
			</v-card>
			<h2 class="pb-3 pt-5">Spring Boot 3</h2>
			<v-card
				class="pa-3 px-6"
				elevation="5"
				rounded="lg"
				style="background-color: rgb(23, 41, 32); color: white;"
			>
				<pre lang="xml">
					<code>
{{ xmlSpring3 }}
					</code>
				</pre>
			</v-card>
			<h2 class="pt-5">Gradle</h2>
			<h2 class="pb-3">Spring Boot 2</h2>
			<v-card
				class="pa-3 px-6"
				elevation="5"
				rounded="lg"
				style="background-color: rgb(23, 41, 32); color: white;"
			>
					<code>
implementation 'io.sentry:sentry-spring-boot-starter:6.24.0'
					</code>
			</v-card>
			<h2 class="pb-3 pt-5">Spring Boot 3</h2>
			<v-card
				class="pa-3 px-6"
				elevation="5"
				rounded="lg"
				style="background-color: rgb(23, 41, 32); color: white;"
			>
					<code>
implementation 'io.sentry:sentry-spring-boot-starter-jakarta:6.24.0'
					</code>
			</v-card>
			<h2 class="pb-3 pt-5">Настройка</h2>
			<p>Откройте src/main/application.properties(или src/main/application.yml) и настройте DSN и любые другие параметры , которые вам нужны:</p>
			<p class="pb-4">Измените src/main/application.properties:</p>
			<v-card
				class="pa-3 px-6"
				elevation="5"
				rounded="lg"
				style="background-color: rgb(23, 41, 32); color: white;"
			>
				<pre>
					<code>
sentry.dsn=http://{{ project.sentry_key }}@localhost:8000/{{ project.id }}
# Set traces-sample-rate to 1.0 to capture 100% of transactions for performance monitoring.
# We recommend adjusting this value in production.
sentry.traces-sample-rate=1.0
					</code>
				</pre>
			</v-card>
			<p class="py-4">Или измените src/main/application.yml:</p>
			<v-card
				class="pa-3 px-6"
				elevation="5"
				rounded="lg"
				style="background-color: rgb(23, 41, 32); color: white;"
			>
				<pre>
					<code>
sentry:
  dsn: http://{{ project.sentry_key }}@localhost:8000/{{ project.id }}
  # Set traces-sample-rate to 1.0 to capture 100% of transactions for performance monitoring.
  # We recommend adjusting this value in production.
  traces-sample-rate: 1.0
					</code>
				</pre>
			</v-card>
			<h2 class="pb-3 pt-5">Отправить первое событие</h2>
			<p class="pb-4">Затем создайте преднамеренную ошибку, чтобы вы могли проверить, что все работает, используя Java</p>
			<v-card
				class="pa-3 px-6"
				elevation="5"
				rounded="lg"
				style="background-color: rgb(23, 41, 32); color: white;"
			>
				<pre>
					<code>
import java.lang.Exception;
import io.sentry.Sentry;

try {
  throw new Exception("This is a test.");
} catch (Exception e) {
  Sentry.captureException(e);
}
					</code>
				</pre>
			</v-card>
		</div>
		<div v-else-if="project.platform == 'VUE'">
			<p>В этом кратком руководстве вы будете использовать npm или yarn для настройки:</p>
			<h2 class="pt-5">Установка</h2>
			<p class="pb-4">Sentry собирает данные с помощью SDK во время выполнения вашего приложения.</p>
			<v-card
				class="pa-3 px-6"
				elevation="5"
				rounded="lg"
				style="background-color: rgb(23, 41, 32); color: white;"
			>
				<pre>
					<code>
# Using yarn
yarn add @sentry/vue

# Using npm
npm install --save @sentry/vue
					</code>
				</pre>
			</v-card>
			<h2 class="pb-3 pt-5">Настройка</h2>
			<p>Инициализируйте Sentry как можно раньше в жизненном цикле вашего приложения.</p>
			<h2 class="pb-3 pt-5">Vue 3</h2>
			<v-card
				class="pa-3 px-6"
				elevation="5"
				rounded="lg"
				style="background-color: rgb(23, 41, 32); color: white;"
			>
				<pre>
					<code>
import { createApp } from "vue";
import { createRouter } from "vue-router";
import * as Sentry from "@sentry/vue";

const app = createApp({
  // ...
});
const router = createRouter({
  // ...
});

Sentry.init({
  app,
  dsn: "http://{{ project.sentry_key }}@localhost:8000/{{ project.id }}",
  integrations: [
    new Sentry.BrowserTracing({
      // Set `tracePropagationTargets` to control for which URLs distributed tracing should be enabled
      tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
    }),
    new Sentry.Replay(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

app.use(router);
app.mount("#app");
					</code>
				</pre>
			</v-card>
			<h2 class="pb-3 pt-5">Vue 2</h2>
			<v-card
				class="pa-3 px-6"
				elevation="5"
				rounded="lg"
				style="background-color: rgb(23, 41, 32); color: white;"
			>
				<pre>
					<code>
import Vue from "vue";
import Router from "vue-router";
import * as Sentry from "@sentry/vue";

Vue.use(Router);

const router = new Router({
  // ...
});

Sentry.init({
  Vue,
  dsn: "http://{{ project.sentry_key }}@localhost:8000/{{ project.id }}",
  integrations: [
    new Sentry.BrowserTracing({
      // Set `tracePropagationTargets` to control for which URLs distributed tracing should be enabled
      tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
    }),
    new Sentry.Replay(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

// ...

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
					</code>
				</pre>
			</v-card>
			<h2 class="pt-5">Проверка</h2>
			<p class="pb-3">Этот фрагмент содержит преднамеренную ошибку и может использоваться в качестве теста, чтобы убедиться, что все работает должным образом.</p>
			<v-card
				class="pa-3 px-6"
				elevation="5"
				rounded="lg"
				style="background-color: rgb(23, 41, 32); color: white;"
			>
					<code>
myUndefinedFunction();
					</code>
			</v-card>
		</div>
	</div>
</template>

<script>
import {getProject} from "@/services/Api"
export default {
	data() {
		return {
			id: this.$route.params['id'],
			project: {},
			xmlSpring2: `<dependency>
	<groupId>io.sentry</groupId>
	<artifactId>sentry-spring-boot-starter</artifactId>
	<version>6.24.0</version>
</dependency>`,
			xmlSpring3: `<dependency>
	<groupId>io.sentry</groupId>
	<artifactId>sentry-spring-boot-starter-jakarta</artifactId>
	<version>6.24.0</version>
</dependency>`
		}
	},
	mounted() {
		getProject(this.id).then(json => {
			this.project = json
		})
	},
	methods: {
		getText() {
			return String(this.project.platform).charAt(0) + String(this.project.platform).slice(1).toLowerCase()
		}
	}
}
</script>