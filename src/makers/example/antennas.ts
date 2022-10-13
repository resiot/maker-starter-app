import { MakerAntenna } from '../antennaMakerTypes'

/* const EXAMPLE_US = {
  name: 'Example Hotspot (US 915)',
  gain: 1.2,
} as MakerAntenna */

const EXAMPLE_EU = {
  // name: 'Example Hotspot (EU 868)',
  name: 'Indoor or Outdoor 3dBi (EU 868)',
  gain: 3.0,
} as MakerAntenna

const EXAMPLE_EU2 = {
  name: 'Outdoor 6.8dBi (EU 868)',
  gain: 6.8,
} as MakerAntenna

const EXAMPLE_EU3 = {
  name: 'Outdoor 8dBi (EU 868)',
  gain: 8.0,
} as MakerAntenna

const EXAMPLE_EU4 = {
  name: 'Outdoor 12dBi (EU 868)',
  gain: 12.0,
} as MakerAntenna

const EXAMPLE_EU5 = {
  name: 'Outdoor 15dBi (EU 868)',
  gain: 15.0,
} as MakerAntenna

export default {
  /* EXAMPLE_US, */ EXAMPLE_EU,
  EXAMPLE_EU2,
  EXAMPLE_EU3,
  EXAMPLE_EU4,
  EXAMPLE_EU5,
}
