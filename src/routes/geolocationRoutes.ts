import express, { Request, Response, NextFunction }  from 'express';

const router = express.Router();

interface LocationInterface {
  location: string;
  timezoneName: string;
  timezoneAbbr: string;
  utcOffset: number;
}

const getLocations = (req: Request, res: Response, next: NextFunction) => {
  let locations: LocationInterface[] = [
    {
      location: 'Germany',
      timezoneName: 'Central European Time',
      timezoneAbbr: 'CET',
      utcOffset: 1
    },
    {
      location: 'China',
      timezoneName: 'China Standard Time',
      timezoneAbbr: 'CST',
      utcOffset: 8
    },
    {
      location: 'Argentina',
      timezoneName: 'Argentina Time',
      timezoneAbbr: 'ART',
      utcOffset: -3
    },
    {
      location: 'Japan',
      timezoneName: 'Japan Standard Time',
      timezoneAbbr: 'JST',
      utcOffset: 9
    }
  ]

  res.status(200).json(locations);
}

router.
  get('/locations', getLocations)


export { router as geolocationRoutes};
