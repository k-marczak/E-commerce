import {
  Grid,
  Button,
  Select,
  MenuItem,
  TextField,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const CheckoutForm = ({
  user = {},

  handleChange,
  handleSubmit,
  handleSelectChange,
}) => (
  <form onSubmit={handleSubmit} autoComplete="off">
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          fullWidth
          id="first-name"
          name="firstName"
          label="Imię"
          value={user.firstName}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          fullWidth
          id="last-name"
          name="lastName"
          label="Nazwisko"
          value={user.lastName}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          fullWidth
          id="email"
          name="email"
          type="email"
          label="Email"
          value={user.email}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          fullWidth
          id="address"
          name="address"
          value={user.address}
          label="Ulica"
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          fullWidth
          id="city"
          name="city"
          label="Miasto"
          value={user.city}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          fullWidth
          id="post-code"
          name="postCode"
          value={user.postCode}
          onChange={handleChange}
          label="Kod pocztowy"
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
          <InputLabel id="shipping-country-select-label">
            Kraj
          </InputLabel>
          <Select
            required
            name="shippingCountry"
            id="shipping-country-select"
            value={user.shippingCountry.code || ""}
            labelId="shipping-country-select-label"
            onChange={(e) => handleSelectChange(e, "shippingCountries")}
          >
            {user.shippingCountries.map((country) => (
              <MenuItem key={country.code} value={country.code}>
                {country.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
          <InputLabel id="shipping-subdivision-select-label">
            Region
          </InputLabel>
          <Select
            required
            name="shippingSubdivision"
            id="shipping-subdivision-select"
            labelId="shipping-subdivision-select-label"
            value={user.shippingSubdivision.code || ""}
            onChange={(e) => handleSelectChange(e, "shippingSubdivisions")}
          >
            {user.shippingSubdivisions.map((subdivision) => (
              <MenuItem key={subdivision.code} value={subdivision.code}>
                {subdivision.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <div style={{margin: '20px'}}></div>


      {/* <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
          <InputLabel id="shipping-options-select-label">
            Shipping Options
          </InputLabel>
          <Select
            
            name="shippingOptions"
            value={user.shippingOption.id}
            id="shipping-options-select"
            labelId="shipping-options-select-label"
            onChange={(e) => handleSelectChange(e, "shippingOptions")}
          >
            {user.shippingOptions.map((option) => (
              <MenuItem key={option.id} value={option.id}>
                {`${option.description} - (${option.price.formatted_with_symbol})`}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid> */}
    </Grid>

    <div className="actions">
      <Button size="medium" to="/basket" component={Link} variant="contained">
        Go Back
      </Button>
      <Button type="submit" size="medium" color="secondary" variant="contained">
        Next
      </Button>
    </div>
  </form>
);

export default CheckoutForm;