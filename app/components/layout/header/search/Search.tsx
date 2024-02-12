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
					<SearchIcon color='gray.300' />
				</InputLeftElement>
				<Input
					variant={'outline'}
					type='search'
					onChange={e => setSearchValue(e.target.value)}
					value={searchValue}
					placeholder='Search'
				/>
			</InputGroup>
		</div>
	)
}

export default Search
