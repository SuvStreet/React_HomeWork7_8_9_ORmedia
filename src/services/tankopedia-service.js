export default class TankopediaService {

_apiBase = 'https://cors-anywhere.herokuapp.com/http://gallerytvr.site/api/';
//_apiBase = 'http://localhost:3000';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  };

  // тяжёлые танки
  getAllHeavy = async () => {
    const res = await this.getResource(`/heavy/`);
    return res  //res.results
      .map(this._transformHeavy)
      .slice(0, 5);
  };

  getHeavy = async (id) => {
    const heavy = await this.getResource(`/heavy/${id}/`);
    return this._transformHeavy(heavy);
  };

  // средние танки
  getAllMedium = async () => {
    const res = await this.getResource(`/medium/`);
    console.log(res);
    return res  //res.results
      .map(this._transformMedium)
      .slice(0, 15);
  }

  getMedium = async (id) => {
    const medium = await this.getResource(`/medium/${id}/`);
    return this._transformMedium(medium);
  };

  // лёгкие танки
  getAllLight = async () => {
    const res = await this.getResource(`/light/`);
    //console.log(res);
    return res  //res.results
      .map(this._transformLight)
      .slice(0, 15);
  }

  getLight = async (id) => {
    const light = await this.getResource(`/light/${id}/`);
    return this._transformLight(light);
  };

  getAllPtSau = async () => {
    const res = await this.getResource(`/pt-sau/`);
    console.log(res);
    return res  //res.results
      .map(this._transformPtSau)
      .slice(0, 15);
  }

  getPtSau = async (id) => {
    const ptSau = await this.getResource(`/pt-sau/${id}/`);
    return this._transformPtSau(ptSau);
  };

  getAllSau = async () => {
    const res = await this.getResource(`/sau/`);
    //console.log(res);
    return res  //res.results
      .map(this._transformSau)
      .slice(0, 15);
  }

  getSau = async (id) => {
    const sau = await this.getResource(`/sau/${id}/`);
    return this._transformSau(sau);
  };

  getAllPremium = async () => {
    const res = await this.getResource(`/premium/`);
    return res   //res.results
      .map(this._transformPremium)
      .slice(0, 5);
  };

  getPremium = async (id) => {
    const premium = await this.getResource(`/premium/${id}/`);
    return this._transformPremium(premium);
  };

  getHeavyImage = ({ id }) => {
    return `https://raw.githubusercontent.com/JSDenis/gallery-tanks/master/heavy_tanks/${id}.jpg`;
  }

  getMediumImage = ({ id }) => {
    return `https://raw.githubusercontent.com/JSDenis/gallery-tanks/master/medium_tanks/${id}.jpg`;
  }

  getLightImage = ({ id }) => {
    return `https://raw.githubusercontent.com/JSDenis/gallery-tanks/master/light_tanks/${id}.jpg`;
  }

  getPtSauImage = ({ id }) => {
    return `https://raw.githubusercontent.com/JSDenis/gallery-tanks/master/pt-sau/${id}.jpg`;
  }

  getSauImage = ({ id }) => {
    return `https://raw.githubusercontent.com/JSDenis/gallery-tanks/master/sau/${id}.jpg`;
  }

  _transformPremium = (premium) => {
    return {
      id: premium.id,
      name: premium.name,
      overview: premium.overview,
      rapidity: premium.rapidity,
      strength: premium.strength,
    };
  };


  _transformHeavy = (heavy) => {
    return {
      id: heavy.id,
      name: heavy.name,
      damage: heavy.damage,
      breakingThrough: heavy.breaking_through,
      weight: heavy.weight,
      strength: heavy.strength,
      bodyArmor: heavy.body_armor,
      towerArmor: heavy.tower_armor,
    }
  }

  _transformMedium = (medium) => {
    return {
      id: medium.id,
      name: medium.name,
      damage: medium.damage,
      breakingThrough: medium.breaking_through,
      maximumSpeed: medium.maximum_speed,
      specificPower: medium.specific_power,
      towerTurningSpeed: medium.tower_turning_speed,
    }
  }

  _transformLight = (light) => {
    return {
      id: light.id,
      name: light.name,
      level: light.level,
      weight: light.weight,
      overview: light.overview,
      maximumSpeed: light.maximum_speed,
      specificPower: light.specific_power,
      enginePower: light.engine_power,
    }
  }

  _transformPtSau = (ptSau) => {
    return {
      id: ptSau.id,
      name: ptSau.name,
      level: ptSau.level,
      ammunition: ptSau.ammunition,
      attachmentTime: ptSau.attachment_time,
      breakingThrough: ptSau.breaking_through,
      damage: ptSau.damage,
    }
  }

  _transformSau = (sau) => {
    return {
      id: sau.id,
      name: sau.name,
      level: sau.level,
      ammunition: sau.ammunition,
      breakingThrough: sau.breaking_through,
      communicationRange: sau.communication_range,
      damage: sau.damage,
    }
  }
}
