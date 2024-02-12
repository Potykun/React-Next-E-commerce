import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'

import '@/assets/styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider>
			<Component {...pageProps}></Component>
		</ChakraProvider>
	)
}
