import { usePosts } from '@hooks/index';
import { MenuItem, TextField, Grid } from '@imports/mui';

const Searchbar = () => {
  const { searchText, setSearchText, sort, setSort, loading, setFilter, filter } = usePosts();

  const handleChangeText = (e) => setSearchText(e.target.value);
  const handleChangeFilter = (e) => setFilter(e.target.value);
  const handleChangeSort = (e) => setSort(e.target.value);

  return (
    <Grid container direction='row' spacing={4} mb={4}>
      <Grid item xs={4}>
        <TextField
          placeholder='Escribe lo que quieras buscar... ej: regulación criptomonedas'
          onChange={handleChangeText}
          value={searchText}
          fullWidth
        />
      </Grid>
      <Grid item xs={2}>
        <TextField label='Filtrar por' onChange={handleChangeFilter} disabled={loading} select value={filter} fullWidth>
          <MenuItem value=''>Ninguno</MenuItem>
          <MenuItem value='relevance'>Relevancia</MenuItem>
          <MenuItem value='date'>Fecha</MenuItem>
        </TextField>
      </Grid>
      <Grid item xs={2}>
        <TextField label='Ordenar por' onChange={handleChangeSort} disabled={loading} select value={sort} fullWidth>
          <MenuItem value=''>Ninguno</MenuItem>
          <MenuItem value='asc'>Ascendente</MenuItem>
          <MenuItem value='desc'>Descendente</MenuItem>
        </TextField>
      </Grid>
    </Grid>
  );
};
export default Searchbar;
