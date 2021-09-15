import React, {useState, useEffect} from 'react'
import { Subject, interval } from 'rxjs'
import {takeUntil} from 'rxjs/operators'

const withObservableStream = () => (Component) => {
    return () => {
        const [sec, setSeconds] = useState(0);
        const [status, setStatus] = useState("paused");

        useEffect(() => {
            const unsubscribe$ = new Subject();
            interval(1000)
                .pipe(takeUntil(unsubscribe$))
                .subscribe(() => {
                    if (status === "run") {
                        setSeconds((val) => {
                            const seconds = val + 1
                            return seconds
                        });
                    }
                });
            return () => {
                unsubscribe$.next();
                unsubscribe$.complete();
            };
        }, [status]);

        const stop = () => { // realize stop func
            setStatus("paused");
            setSeconds(0);
        };

        const start = () => setStatus("run"); // realize start func

        const reset = () => setSeconds(0); // realize reset func

        const wait = () => setStatus("paused"); // realize reset wait

        return (
            <Component start={start} stop={stop} reset={reset} wait={wait} sec={sec} status={status} />
        );
    }
}

export default withObservableStream;


