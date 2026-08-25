"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import styles from "./clientinfo.module.css";

type RoutingKey = "nk" | "hk";

type Percentage =
  | 25
  | 50
  | 75
  | 100;

type GlobalConfig = {
  enabled: boolean;
  percentage: Percentage;
  key: RoutingKey;
};

type Country = {
  name: string;
  code: string;
};

type CountryOverride = {
  name: string;
  code: string;
  useGlobal: false;
  enabled: boolean;
  percentage: Percentage;
  key: RoutingKey;
};

export default function ClientInfoDashboard() {
  const [nk, setNk] = useState("");
  const [hk, setHk] = useState("");

  const [globalConfig, setGlobalConfig] =
    useState<GlobalConfig>({
      enabled: false,
      percentage: 100,
      key: "nk",
    });

  const [countries, setCountries] =
    useState<Country[]>([]);

  const [overrides, setOverrides] =
    useState<CountryOverride[]>([]);

  const [search, setSearch] =
    useState("");

  const [loading, setLoading] =
    useState(true);

  const [message, setMessage] =
    useState("");

  async function loadConfig() {
    const response = await fetch(
      "/clientinfo/api/admin/config",
      {
        cache: "no-store",
      }
    );

    if (response.status === 401) {
      window.location.reload();
      return;
    }

    const data = await response.json();

    if (!response.ok) {
      setMessage(
        data.error ||
          "Unable to load configuration"
      );

      return;
    }

    setNk(data.config.nk);
    setHk(data.config.hk);

    setGlobalConfig(
      data.config.global
    );

    setOverrides(
      data.config.overrides
    );

    setCountries(data.countries);

    setLoading(false);
  }

  useEffect(() => {
    loadConfig();
  }, []);

  const filteredCountries =
    useMemo(() => {
      const query =
        search.trim().toLowerCase();

      if (!query) {
        return countries;
      }

      return countries.filter(
        (country) =>
          country.name
            .toLowerCase()
            .includes(query) ||
          country.code
            .toLowerCase()
            .includes(query)
      );
    }, [countries, search]);

  function findOverride(code: string) {
    return overrides.find(
      (item) => item.code === code
    );
  }

  async function saveGlobal() {
    setMessage("Saving...");

    const response = await fetch(
      "/clientinfo/api/admin/config",
      {
        method: "PATCH",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          nk,
          hk,
          global: globalConfig,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      setMessage(
        data.error || "Save failed"
      );
      return;
    }

    setMessage("Global settings saved.");
    await loadConfig();
  }

  async function updateCountry(
    country: Country,
    changes: Partial<CountryOverride>
  ) {
    const existing =
      findOverride(country.code);

    const config: CountryOverride = {
      name: country.name,
      code: country.code,
      useGlobal: false,

      enabled:
        changes.enabled ??
        existing?.enabled ??
        globalConfig.enabled,

      percentage:
        changes.percentage ??
        existing?.percentage ??
        globalConfig.percentage,

      key:
        changes.key ??
        existing?.key ??
        globalConfig.key,
    };

    setOverrides((current) => [
      ...current.filter(
        (item) =>
          item.code !== country.code
      ),
      config,
    ]);

    const response = await fetch(
      `/clientinfo/api/admin/countries/${country.code}`,
      {
        method: "PATCH",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify(config),
      }
    );

    if (!response.ok) {
      setMessage(
        `Failed to update ${country.name}`
      );

      await loadConfig();
      return;
    }

    setMessage(
      `${country.name} updated.`
    );
  }

  async function resetCountry(
    country: Country
  ) {
    const response = await fetch(
      `/clientinfo/api/admin/countries/${country.code}`,
      {
        method: "PATCH",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          useGlobal: true,
        }),
      }
    );

    if (!response.ok) {
      setMessage(
        `Unable to reset ${country.name}`
      );

      return;
    }

    setOverrides((current) =>
      current.filter(
        (item) =>
          item.code !== country.code
      )
    );

    setMessage(
      `${country.name} now uses Global.`
    );
  }

  async function applyGlobalToAll() {
    const confirmed =
      window.confirm(
        "Remove every country override and make all countries use Global settings?"
      );

    if (!confirmed) {
      return;
    }

    const response = await fetch(
      "/clientinfo/api/admin/apply-global",
      {
        method: "POST",
      }
    );

    if (!response.ok) {
      setMessage(
        "Unable to apply Global settings."
      );
      return;
    }

    setOverrides([]);

    setMessage(
      "All countries now use Global settings."
    );
  }

  async function logout() {
    await fetch(
      "/clientinfo/api/auth/logout",
      {
        method: "POST",
      }
    );

    window.location.reload();
  }

  if (loading) {
    return (
      <main
        className={styles.dashboard}
      >
        Loading configuration...
      </main>
    );
  }

  return (
    <main
      className={styles.dashboard}
    >
      <header
        className={styles.adminHeader}
      >
        <div>
          <div
            className={styles.eyebrow}
          >
            NEURON INNOVATIONS
          </div>

          <h1>
            Ad Route Administration
          </h1>

          <p>
            Ad routing and regional
            configuration.
          </p>
        </div>

        <button
          className={styles.secondaryButton}
          onClick={logout}
        >
          Sign Out
        </button>
      </header>

      {message && (
        <div
          className={styles.message}
        >
          {message}
        </div>
      )}

      <section
        className={styles.card}
      >
        <div
          className={styles.sectionTitle}
        >
          <div>
            <h2>Routing Values</h2>
            <p>
              Values returned for NK and
              HK routes.
            </p>
          </div>
        </div>

        <div
          className={styles.twoColumns}
        >
          <label>
            NK
            <input
              value={nk}
              onChange={(event) =>
                setNk(
                  event.target.value
                )
              }
            />
          </label>

          <label>
            HK
            <input
              value={hk}
              onChange={(event) =>
                setHk(
                  event.target.value
                )
              }
            />
          </label>
        </div>
      </section>

      <section
        className={styles.card}
      >
        <div
          className={styles.sectionTitle}
        >
          <div>
            <h2>
              Global Configuration
            </h2>

            <p>
              Default for every country
              without an override.
            </p>
          </div>
        </div>

        <div
          className={styles.globalGrid}
        >
          <label>
            Ads
            <select
              value={
                globalConfig.enabled
                  ? "on"
                  : "off"
              }
              onChange={(event) =>
                setGlobalConfig({
                  ...globalConfig,

                  enabled:
                    event.target.value ===
                    "on",
                })
              }
            >
              <option value="on">
                ON
              </option>

              <option value="off">
                OFF
              </option>
            </select>
          </label>

          <label>
            Percentage
            <select
              value={
                globalConfig.percentage
              }
              onChange={(event) =>
                setGlobalConfig({
                  ...globalConfig,

                  percentage:
                    Number(
                      event.target.value
                    ) as Percentage,
                })
              }
            >
              <option value="25">
                25%
              </option>

              <option value="50">
                50%
              </option>

              <option value="75">
                75%
              </option>

              <option value="100">
                100%
              </option>
            </select>
          </label>

          <label>
            Key
            <select
              value={globalConfig.key}
              onChange={(event) =>
                setGlobalConfig({
                  ...globalConfig,

                  key:
                    event.target
                      .value as RoutingKey,
                })
              }
            >
              <option value="nk">
                NK
              </option>

              <option value="hk">
                HK
              </option>
            </select>
          </label>
        </div>

        <div
          className={styles.actions}
        >
          <button
            onClick={saveGlobal}
          >
            Save Global Settings
          </button>

          <button
            className={
              styles.dangerButton
            }
            onClick={
              applyGlobalToAll
            }
          >
            Apply Global to All
          </button>
        </div>
      </section>

      <section
        className={styles.card}
      >
        <div
          className={styles.sectionTitle}
        >
          <div>
            <h2>
              Country Configuration
            </h2>

            <p>
              {overrides.length} custom
              override
              {overrides.length === 1
                ? ""
                : "s"}
            </p>
          </div>

          <input
            className={
              styles.searchInput
            }
            placeholder="Search country or code..."
            value={search}
            onChange={(event) =>
              setSearch(
                event.target.value
              )
            }
          />
        </div>

        <div
          className={
            styles.countryList
          }
        >
          {filteredCountries.map(
            (country) => {
              const override =
                findOverride(
                  country.code
                );

              const effective =
                override ||
                globalConfig;

              return (
                <div
                  className={
                    styles.countryRow
                  }
                  key={country.code}
                >
                  <div
                    className={
                      styles.countryName
                    }
                  >
                    <strong>
                      {country.name}
                    </strong>

                    <span>
                      {country.code}
                    </span>
                  </div>

                  <span
                    className={
                      override
                        ? styles.customBadge
                        : styles.globalBadge
                    }
                  >
                    {override
                      ? "CUSTOM"
                      : "GLOBAL"}
                  </span>

                  <select
                    value={
                      effective.enabled
                        ? "on"
                        : "off"
                    }
                    onChange={(
                      event
                    ) =>
                      updateCountry(
                        country,
                        {
                          enabled:
                            event.target
                              .value ===
                            "on",
                        }
                      )
                    }
                  >
                    <option value="on">
                      ON
                    </option>

                    <option value="off">
                      OFF
                    </option>
                  </select>

                  <select
                    value={
                      effective.percentage
                    }
                    onChange={(
                      event
                    ) =>
                      updateCountry(
                        country,
                        {
                          percentage:
                            Number(
                              event
                                .target
                                .value
                            ) as Percentage,
                        }
                      )
                    }
                  >
                    <option value="25">
                      25%
                    </option>

                    <option value="50">
                      50%
                    </option>

                    <option value="75">
                      75%
                    </option>

                    <option value="100">
                      100%
                    </option>
                  </select>

                  <select
                    value={
                      effective.key
                    }
                    onChange={(
                      event
                    ) =>
                      updateCountry(
                        country,
                        {
                          key:
                            event.target
                              .value as RoutingKey,
                        }
                      )
                    }
                  >
                    <option value="nk">
                      NK
                    </option>

                    <option value="hk">
                      HK
                    </option>
                  </select>

                  <button
                    className={
                      styles.resetButton
                    }
                    disabled={!override}
                    onClick={() =>
                      resetCountry(
                        country
                      )
                    }
                  >
                    Reset
                  </button>
                </div>
              );
            }
          )}
        </div>
      </section>
    </main>
  );
}