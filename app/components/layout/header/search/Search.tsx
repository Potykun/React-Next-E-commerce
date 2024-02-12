import { SearchIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { FC, useState } from 'react'

import styles from './Search.module.scss'

const Search: FC = () => {
	const [searchValue, setSearchValue] = useState('')
	return (
		<div className={styles.search}>
			<InputGroup>
				<InputLeftElement pointerEvents='none'>
					<SearchIcon color='gray.500' />
				</InputLeftElement>
				<Input
					variant={'flushed'}
					type='search'
					onChange={e => setSearchValue(e.target.value)}
					value={searchValue}
					placeholder='Search'
					_focus={{
						boxShadow: 'none',
						ring: 'none'
					}}
					_focusVisible={{ borderColor: '#008D64' }}
				/>
			</InputGroup>
		</div>
	)
}

export default Search
